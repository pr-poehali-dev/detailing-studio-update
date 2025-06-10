import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesGrid = () => {
  const services = [
    {
      title: "Химчистка салона",
      icon: "Sparkles",
      items: [
        "Потолок",
        "Сиденья (кожа, ткань, алькантара)",
        "Пол",
        "Пластик с полировкой защитными составами",
        "Очистка дефлекторов спец кистями",
        "Очистка стекол",
      ],
    },
    {
      title: "Полировка и защита",
      icon: "Zap",
      items: [
        "Полировка фар",
        "Полировка кузова на блеск",
        "Абразивная 3х шаговая полировка",
        "Покрытие керамикой, жидким стеклом, воском",
        "Нанесение антидождя",
      ],
    },
    {
      title: "Дополнительные услуги",
      icon: "Settings",
      items: [
        "Предпродажная подготовка",
        "Озонация салона",
        "Удаление микробов и неприятных запахов",
        "Гипоаллергенные составы",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг детейлинга с использованием только проверенных
            качественных составов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Icon
                    name={service.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <CardTitle className="text-xl font-montserrat text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
