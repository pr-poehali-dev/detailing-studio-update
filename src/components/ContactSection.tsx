import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            Готовы преобразить ваш автомобиль?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Запишитесь на детейлинг уже сегодня и получите скидку на первое
            посещение
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Icon
                name="Phone"
                size={32}
                className="text-blue-400 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (XXX) XXX-XX-XX</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Icon
                name="MapPin"
                size={32}
                className="text-blue-400 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Адрес</h3>
              <p className="text-gray-300">г. Ваш город, ул. Адрес</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Icon
                name="Clock"
                size={32}
                className="text-blue-400 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
              <p className="text-gray-300">Ежедневно 9:00 - 21:00</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 text-lg"
          >
            <Icon name="Calendar" size={24} className="mr-3" />
            Записаться на детейлинг
          </Button>

          <p className="text-sm text-gray-400 mt-4">
            Звоните прямо сейчас и получите бесплатную консультацию
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
