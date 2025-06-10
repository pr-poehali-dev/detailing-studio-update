import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const QualitySection = () => {
  const features = [
    {
      icon: "Award",
      title: "Качественные составы",
      description:
        "Работаем только проверенными гипоаллергенными химическими составами",
    },
    {
      icon: "Clock",
      title: "Опыт и профессионализм",
      description: "Многолетний опыт в автомобильном детейлинге",
    },
    {
      icon: "Heart",
      title: "Забота о здоровье",
      description: "Используем только безопасные и гипоаллергенные средства",
    },
    {
      icon: "Target",
      title: "Внимание к деталям",
      description: "Каждый автомобиль получает максимум внимания",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600">
            Гарантия качества и индивидуальный подход к каждому клиенту
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon
                      name={feature.icon}
                      size={24}
                      className="text-blue-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <Icon name="Gift" size={48} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 font-montserrat">
            Подарочные сертификаты
          </h3>
          <p className="text-lg mb-6">
            Подарите близким профессиональный уход за автомобилем
          </p>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
            <Icon name="Star" size={20} className="mr-2" />
            <span>Идеальный подарок для автолюбителя</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
