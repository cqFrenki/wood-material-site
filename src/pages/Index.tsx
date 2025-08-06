import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const woodMaterials = [
  {
    id: 1,
    name: 'Дуб европейский',
    type: 'Твердые породы',
    sizes: ['40х200х2000', '50х150х3000', '60х250х2500'],
    price: '2500 ₽/м³',
    description: 'Прочная и долговечная древесина премиум класса',
    image: '/img/25443913-e6a7-449e-b4f4-447482c6730f.jpg'
  },
  {
    id: 2,
    name: 'Сосна кедровая',
    type: 'Хвойные породы',
    sizes: ['25х100х2000', '40х150х3000', '50х200х2500'],
    price: '1200 ₽/м³',
    description: 'Отличная для строительства и отделочных работ',
    image: '/img/25443913-e6a7-449e-b4f4-447482c6730f.jpg'
  },
  {
    id: 3,
    name: 'Береза карельская',
    type: 'Твердые породы',
    sizes: ['30х120х2000', '40х180х2500', '50х200х3000'],
    price: '1800 ₽/м³',
    description: 'Красивая текстура, идеальна для мебели',
    image: '/img/25443913-e6a7-449e-b4f4-447482c6730f.jpg'
  },
  {
    id: 4,
    name: 'Лиственница сибирская',
    type: 'Хвойные породы',
    sizes: ['40х150х2000', '50х200х3000', '60х250х2500'],
    price: '1600 ₽/м³',
    description: 'Устойчива к влаге, подходит для наружных работ',
    image: '/img/25443913-e6a7-449e-b4f4-447482c6730f.jpg'
  },
  {
    id: 5,
    name: 'Ясень белый',
    type: 'Твердые породы',
    sizes: ['30х150х2000', '40х200х2500', '50х250х3000'],
    price: '2200 ₽/м³',
    description: 'Эластичная и прочная древесина для спортинвентаря',
    image: '/img/25443913-e6a7-449e-b4f4-447482c6730f.jpg'
  },
  {
    id: 6,
    name: 'Ель норвежская',
    type: 'Хвойные породы',
    sizes: ['25х100х2000', '40х150х2500', '50х200х3000'],
    price: '1000 ₽/м³',
    description: 'Бюджетный вариант для строительных работ',
    image: '/img/25443913-e6a7-449e-b4f4-447482c6730f.jpg'
  }
];

const services = [
  {
    title: 'Распил по размерам',
    description: 'Точная резка материала по вашим чертежам',
    icon: 'Saw'
  },
  {
    title: 'Сушка древесины',
    description: 'Профессиональная камерная сушка до 8-12%',
    icon: 'Thermometer'
  },
  {
    title: 'Строгание и шлифовка',
    description: 'Обработка поверхности до идеального состояния',
    icon: 'FileSliders'
  },
  {
    title: 'Доставка',
    description: 'Быстрая доставка по городу и области',
    icon: 'Truck'
  }
];

export default function Index() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSize, setSelectedSize] = useState('all');

  const filteredMaterials = woodMaterials.filter(material => {
    const matchesType = selectedType === 'all' || material.type === selectedType;
    const matchesSearch = material.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSize = selectedSize === 'all' || material.sizes.some(size => size.includes(selectedSize));
    return matchesType && matchesSearch && matchesSize;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-wood-beige to-white">
      {/* Navigation */}
      <nav className="bg-wood-dark text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center gap-2">
            <Icon name="TreePine" size={32} />
            ЛОВЕККА
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#catalog" className="hover:text-wood-beige transition-colors">Каталог</a>
            <a href="#services" className="hover:text-wood-beige transition-colors">Услуги</a>
            <a href="#about" className="hover:text-wood-beige transition-colors">О компании</a>
            <a href="#contacts" className="hover:text-wood-beige transition-colors">Контакты</a>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative">
                <div className="absolute inset-0 animate-pulse-attention rounded-md"></div>
                <Button className="relative bg-wood-brown hover:bg-wood-green shadow-lg hover:shadow-xl transition-all duration-300">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Связаться
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-wood-dark">Связаться с нами</DialogTitle>
              </DialogHeader>
              <div className="text-center py-6">
                <div className="mx-auto mb-6 p-4 bg-wood-brown text-white rounded-full w-fit">
                  <Icon name="Phone" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-wood-dark mb-4">Позвоните нам</h3>
                <div className="space-y-3">
                  <a href="tel:+74951234567" className="block text-xl font-semibold text-wood-brown hover:text-wood-green transition-colors">
                    +7 (495) 123-45-67
                  </a>
                  <a href="tel:+74959876543" className="block text-xl font-semibold text-wood-brown hover:text-wood-green transition-colors">
                    +7 (495) 987-65-43
                  </a>
                </div>
                <p className="text-gray-600 mt-4">
                  Работаем ежедневно с 8:00 до 20:00
                </p>
                <div className="flex gap-2 mt-6 justify-center">
                  <Button asChild className="bg-wood-brown hover:bg-wood-green">
                    <a href="tel:+74951234567">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Позвонить
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:info@lovekka.ru">
                      <Icon name="Mail" size={16} className="mr-2" />
                      Написать
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative text-white py-20 px-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/img/886831d7-cb16-4d71-b4ef-5faaacbd037f.jpg)'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto text-center animate-fade-in relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            Готовые материалы из дерева
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Высококачественная древесина различных пород с профессиональной обработкой. 
            Быстрая доставка и индивидуальный подход к каждому заказу.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-wood-brown hover:bg-orange-600 text-white px-8 py-4 text-lg">
              <Icon name="Search" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-wood-dark px-8 py-4 text-lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-wood-dark mb-4">Каталог материалов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Широкий выбор древесины различных пород для любых строительных и отделочных работ
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-md animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-wood-dark mb-2">Тип древесины</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="Твердые породы">Твердые породы</SelectItem>
                    <SelectItem value="Хвойные породы">Хвойные породы</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wood-dark mb-2">Поиск по названию</label>
                <Input
                  type="text"
                  placeholder="Введите название..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wood-dark mb-2">Размер</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите размер" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все размеры</SelectItem>
                    <SelectItem value="25">25мм толщина</SelectItem>
                    <SelectItem value="40">40мм толщина</SelectItem>
                    <SelectItem value="50">50мм толщина</SelectItem>
                    <SelectItem value="60">60мм толщина</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material) => (
              <Card key={material.id} className="hover:shadow-lg transition-shadow animate-slide-up group">
                <div className="relative overflow-hidden">
                  <img 
                    src={material.image} 
                    alt={material.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-wood-brown">
                    {material.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-wood-dark">{material.name}</CardTitle>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-wood-green">Цена:</span>
                      <span className="text-xl font-bold text-wood-brown">{material.price}</span>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-wood-green">Размеры в наличии:</span>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {material.sizes.map((size) => (
                          <Badge key={size} variant="outline" className="text-xs">
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-wood-brown hover:bg-wood-green mt-4">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-wood-beige">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-wood-dark mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный цикл обработки древесины от распила до готового материала
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-slide-up bg-white">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-wood-brown text-white rounded-full w-fit">
                    <Icon name={service.icon} size={32} />
                  </div>
                  <CardTitle className="text-wood-dark">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-wood-dark mb-6">О компании</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Мы работаем с древесиной уже более 15 лет и знаем всё о качественных материалах. 
                Наша команда профессионалов обеспечивает высочайший стандарт обработки и подготовки древесины.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-wood-green" size={24} />
                  <span>Сертифицированные материалы высшего качества</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-wood-green" size={24} />
                  <span>Современное оборудование для обработки</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-wood-green" size={24} />
                  <span>Индивидуальный подход к каждому заказу</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" className="text-wood-green" size={24} />
                  <span>Гарантия качества на все материалы</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <img 
                src="/img/25443913-e6a7-449e-b4f4-447482c6730f.jpg" 
                alt="Наше производство"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 text-white relative overflow-hidden" style={{backgroundColor: 'rgb(45, 74, 34)'}}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-wood-brown rotate-12"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-wood-brown rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-wood-brown rotate-12"></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-wood-brown -rotate-12"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Мы работаем с каждым клиентом индивидуально, чтобы найти идеальное решение для ваших проектов
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-wood-brown/20 to-wood-green/10 backdrop-blur-sm rounded-2xl p-8 border border-wood-brown/30 hover:border-wood-brown/60 transition-all duration-300 group animate-slide-up">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-wood-brown to-wood-green rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
                <div className="relative mx-auto mb-6 p-4 bg-gradient-to-br from-wood-brown to-wood-green rounded-full w-fit">
                  <Icon name="Phone" size={28} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Телефон</h3>
              <div className="space-y-2 text-center">
                <a href="tel:+78137210567" className="block text-lg hover:text-wood-brown transition-colors font-medium">
                  +7 (813) 721-05-67
                </a>
                <a href="tel:+78137219543" className="block text-lg hover:text-wood-brown transition-colors font-medium">
                  +7 (813) 721-95-43
                </a>
              </div>
              <p className="text-gray-400 text-center mt-4">
                Ежедневно 8:00 - 20:00
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-wood-green/20 to-wood-brown/10 backdrop-blur-sm rounded-2xl p-8 border border-wood-green/30 hover:border-wood-green/60 transition-all duration-300 group animate-slide-up">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-wood-green to-wood-brown rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
                <div className="relative mx-auto mb-6 p-4 bg-gradient-to-br from-wood-green to-wood-brown rounded-full w-fit">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Email</h3>
              <div className="space-y-2 text-center">
                <a href="mailto:info@vyborgwood.ru" className="block text-lg hover:text-wood-green transition-colors font-medium">
                  info@vyborgwood.ru
                </a>
                <a href="mailto:orders@vyborgwood.ru" className="block text-lg hover:text-wood-green transition-colors font-medium">
                  orders@vyborgwood.ru
                </a>
              </div>
              <p className="text-gray-400 text-center mt-4">
                Отвечаем в течение часа
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-wood-brown/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 group animate-slide-up">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-wood-brown rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
                <div className="relative mx-auto mb-6 p-4 bg-gradient-to-br from-orange-500 to-wood-brown rounded-full w-fit">
                  <Icon name="MapPin" size={28} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Адрес</h3>
              <div className="text-center">
                <p className="text-lg font-medium mb-1">г. Выборг</p>
                <p className="text-lg font-medium">ул. Промышленная, 15</p>
              </div>
              <p className="text-gray-400 text-center mt-4">
                Ленинградская область
              </p>
            </div>
          </div>

          {/* Enhanced Yandex Map */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-white/10 to-wood-brown/10 backdrop-blur-sm rounded-2xl p-6 border border-wood-brown/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Icon name="Map" size={24} className="text-wood-brown" />
                  Как нас найти
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-3 h-3 rounded-full animate-pulse bg-lime-500"></div>
                  <span>Мы здесь</span>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl h-96 relative">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac80c0e9e7d2f4a2b9c5e8f1d6a3b7c0e4&amp;source=constructor&ll=28.741632%2C60.712778&z=16&pt=28.741632%2C60.712778%2Cpm2rdl"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Производство древесных материалов в Выборге"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-800">Выборг Древпром</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 text-sm text-gray-300">
                <span>г. Выборг, ул. Промышленная, 15</span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Работаем ежедневно 8:00-20:00
                </span>
              </div>
            </div>
          </div>
          
          {/* Consultation CTA */}
          <div className="text-center mt-16 animate-slide-up">
            <div className="bg-gradient-to-r from-wood-brown/20 via-wood-green/20 to-wood-brown/20 rounded-3xl p-8 mb-8 border border-wood-brown/30">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-3 text-white">Нужна помощь в выборе?</h3>
                <p className="text-gray-300 text-lg">Наши специалисты подберут оптимальные материалы для вашего проекта</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-wood-brown to-wood-green hover:from-wood-green hover:to-wood-brown px-10 py-4 text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 border border-wood-brown/50">
                    <Icon name="MessageCircle" size={24} className="mr-3" />
                    Получить консультацию
                  </Button>
                </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-wood-dark">Получить консультацию</DialogTitle>
                </DialogHeader>
                <div className="text-center py-6">
                  <div className="mx-auto mb-6 p-4 bg-wood-brown text-white rounded-full w-fit">
                    <Icon name="Phone" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-wood-dark mb-4">Позвоните нам</h3>
                  <div className="space-y-3">
                    <a href="tel:+74951234567" className="block text-xl font-semibold text-wood-brown hover:text-wood-green transition-colors">
                      +7 (495) 123-45-67
                    </a>
                    <a href="tel:+74959876543" className="block text-xl font-semibold text-wood-brown hover:text-wood-green transition-colors">
                      +7 (495) 987-65-43
                    </a>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Работаем ежедневно с 8:00 до 20:00
                  </p>
                  <div className="flex gap-2 mt-6 justify-center">
                    <Button asChild className="bg-wood-brown hover:bg-wood-green">
                      <a href="tel:+74951234567">
                        <Icon name="Phone" size={16} className="mr-2" />
                        Позвонить
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="mailto:info@lovekka.ru">
                        <Icon name="Mail" size={16} className="mr-2" />
                        Написать
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="TreePine" size={24} />
            <span className="text-xl font-bold text-white">ЛОВЕККА</span>
          </div>
          <p>&copy; 2024 ЛОВЕККА. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}