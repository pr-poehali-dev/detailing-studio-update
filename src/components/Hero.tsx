import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <img
            src="https://cdn.poehali.dev/files/41467780-bb70-41d4-ba18-770efb991c8a.png"
            alt="Update Detailing Logo"
            className="h-12 w-auto mr-4"
          />
          <h1 className="text-5xl font-bold font-montserrat">
            Студия детейлинга <span className="text-blue-400">Update</span>
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl mb-8 text-gray-300">
            Лучшее соотношение цена/качество в городе!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <Icon
                name="Shield"
                size={32}
                className="text-blue-400 mx-auto mb-3"
              />
              <h3 className="font-semibold mb-2">Гарантия на все работы</h3>
              <p className="text-sm text-gray-300">100% качество результата</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <Icon
                name="Gift"
                size={32}
                className="text-blue-400 mx-auto mb-3"
              />
              <h3 className="font-semibold mb-2">Акции и подарки</h3>
              <p className="text-sm text-gray-300">Скидки и сертификаты</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <Icon
                name="Users"
                size={32}
                className="text-blue-400 mx-auto mb-3"
              />
              <h3 className="font-semibold mb-2">Индивидуальный подход</h3>
              <p className="text-sm text-gray-300">К каждому клиенту</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Записаться на детейлинг
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
