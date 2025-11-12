import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

type TransportType = 'courier' | 'truck5t' | 'highway' | 'air' | 'rail' | 'sea';
type ViewMode = 'main' | 'order';

interface Destination {
  id: string;
  name: string;
  icon: string;
}

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('main');
  const [selectedTransport, setSelectedTransport] = useState<TransportType | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [armedEscort, setArmedEscort] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const transportTypes = [
    { 
      id: 'courier' as TransportType, 
      name: 'Курьер', 
      icon: '🚴',
      image: 'https://cdn.poehali.dev/projects/879127b7-d3b3-4b09-b57a-a17bea9aa5b0/files/0d4993b4-fe15-4549-a278-85d58f170c69.jpg'
    },
    { 
      id: 'truck5t' as TransportType, 
      name: 'До 5 тонн', 
      icon: '🚛',
      image: 'https://cdn.poehali.dev/projects/879127b7-d3b3-4b09-b57a-a17bea9aa5b0/files/f72e9de3-edf7-4f50-8e56-763fa251288f.jpg'
    },
    { 
      id: 'highway' as TransportType, 
      name: 'Магистральный', 
      icon: '🚚',
      image: 'https://cdn.poehali.dev/projects/879127b7-d3b3-4b09-b57a-a17bea9aa5b0/files/f72e9de3-edf7-4f50-8e56-763fa251288f.jpg'
    },
    { id: 'air' as TransportType, name: 'Авиа', icon: '✈️', image: '' },
    { id: 'rail' as TransportType, name: 'ЖД', icon: '🚂', image: '' },
    { id: 'sea' as TransportType, name: 'Море', icon: '🚢', image: '' }
  ];

  const destinations: Destination[] = [
    { id: 'oilfield', name: 'Месторождения', icon: '🛢️' },
    { id: 'fareast', name: 'Дальний Восток', icon: '🌏' },
    { id: 'europe', name: 'Европа', icon: '🇪🇺' },
    { id: 'usa', name: 'США', icon: '🇺🇸' },
    { id: 'china', name: 'Китай', icon: '🇨🇳' },
    { id: 'southafrica', name: 'ЮАР', icon: '🇿🇦' },
    { id: 'uae', name: 'ОАЭ', icon: '🇦🇪' },
    { id: 'iran', name: 'Иран', icon: '🇮🇷' },
    { id: 'egypt', name: 'Египет', icon: '🇪🇬' },
    { id: 'japan', name: 'Япония', icon: '🇯🇵' },
    { id: 'korea', name: 'Корея', icon: '🇰🇷' },
    { id: 'marketplace', name: 'Маркетплейсы', icon: '🏪' },
    { id: 'vietnam', name: 'Вьетнам', icon: '🇻🇳' },
    { id: 'specialzone', name: 'Спецзоны', icon: '🔴' }
  ];

  const shopProducts = [
    { name: 'Защитная упаковка премиум', price: '12 500₽', image: '📦' },
    { name: 'GPS-трекеры для груза', price: '8 900₽', image: '📍' },
    { name: 'Страхование карго', price: 'от 15 000₽', image: '🛡️' }
  ];

  const partners = [
    { name: 'Кофе водителям -15%', category: 'Партнёр', image: '☕' },
    { name: 'Скидка на топливо 5%', category: 'Партнёр', image: '⛽' },
    { name: 'Услуги юриста', category: 'Партнёр', image: '⚖️' }
  ];

  const handleStartOrder = () => {
    if (selectedTransport) {
      setViewMode('order');
    }
  };

  const requiresArmedEscort = selectedTransport === 'highway' || selectedDestination === 'specialzone' || selectedDestination === 'oilfield';

  return (
    <div className="min-h-screen bg-[#1a1410] text-[#c9a961]">
      <div className="max-w-md mx-auto">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#1a1410]/95 border-b border-[#c9a961]/10">
          <div className="flex items-center justify-between p-4">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-[#c9a961]/10">
                  <Icon name="Menu" className="text-[#c9a961]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-[#251f1a] border-[#c9a961]/20 w-80">
                <div className="flex flex-col h-full">
                  <div className="mb-8 mt-4">
                    <img 
                      src="https://cdn.poehali.dev/projects/879127b7-d3b3-4b09-b57a-a17bea9aa5b0/files/7593e496-123e-46e0-802d-ccaffd511013.jpg" 
                      alt="H&C Logistics"
                      className="h-12 mb-2"
                    />
                    <p className="text-[#8b7355] text-sm">Первый российский 5PL-оператор</p>
                  </div>
                  
                  <div className="space-y-2 flex-1">
                    <Button 
                      variant="ghost"
                      className="w-full justify-start text-[#c9a961] hover:bg-[#c9a961]/10"
                      onClick={() => {
                        setViewMode('main');
                        setSidebarOpen(false);
                      }}
                    >
                      <Icon name="Home" className="mr-3" size={20} />
                      <span>Главная</span>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start text-[#8b7355] hover:bg-[#c9a961]/10">
                      <Icon name="Package" className="mr-3" size={20} />
                      <span>Мои заказы</span>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start text-[#8b7355] hover:bg-[#c9a961]/10">
                      <Icon name="MapPin" className="mr-3" size={20} />
                      <span>Трекинг</span>
                    </Button>
                    
                    <Separator className="bg-[#c9a961]/10 my-4" />
                    
                    <Button variant="ghost" className="w-full justify-start text-[#8b7355] hover:bg-[#c9a961]/10">
                      <Icon name="User" className="mr-3" size={20} />
                      <span>Профиль</span>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start text-[#8b7355] hover:bg-[#c9a961]/10">
                      <Icon name="Settings" className="mr-3" size={20} />
                      <span>Настройки</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/879127b7-d3b3-4b09-b57a-a17bea9aa5b0/files/7593e496-123e-46e0-802d-ccaffd511013.jpg" 
                alt="H&C Logistics"
                className="h-8"
              />
              <h1 className="text-xl font-bold text-[#c9a961] tracking-wide">H&C Logistics</h1>
            </div>
            
            <Button variant="ghost" size="icon" className="hover:bg-[#c9a961]/10">
              <Icon name="Bell" className="text-[#c9a961]" size={20} />
            </Button>
          </div>
        </header>

        {viewMode === 'main' && (
          <main className="p-5 pb-64 animate-fade-in">
            <div className="mb-8 text-center">
              <p className="text-[#8b7355] text-sm uppercase tracking-widest mb-2">Премиальная логистика</p>
              <h2 className="text-3xl font-bold text-[#c9a961] mb-2">Первый российский 5PL-оператор</h2>
              <p className="text-[#8b7355]">Полный цикл управления поставками</p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-[#8b7355] mb-4 uppercase tracking-wider">Выберите тип транспорта</h3>
              <div className="grid grid-cols-3 gap-3">
                {transportTypes.map((transport) => (
                  <Card
                    key={transport.id}
                    onClick={() => setSelectedTransport(transport.id)}
                    className={`
                      cursor-pointer transition-all duration-300 p-0 overflow-hidden
                      ${selectedTransport === transport.id 
                        ? 'ring-2 ring-[#c9a961] glow-gold-strong scale-105' 
                        : 'bg-[#251f1a] border-[#c9a961]/20 hover:border-[#c9a961]/40 hover:scale-102'
                      }
                    `}
                  >
                    {transport.image ? (
                      <div className="relative">
                        <img src={transport.image} alt={transport.name} className="w-full h-24 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-transparent to-transparent" />
                      </div>
                    ) : (
                      <div className="h-24 flex items-center justify-center bg-gradient-to-br from-[#251f1a] to-[#1a1410]">
                        <span className="text-4xl">{transport.icon}</span>
                      </div>
                    )}
                    <div className="p-3 text-center">
                      <span className="text-xs font-medium text-[#c9a961]">{transport.name}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {selectedTransport && (
              <div className="mb-8 animate-scale-in">
                <h3 className="text-sm font-semibold text-[#8b7355] mb-4 uppercase tracking-wider">Направление доставки</h3>
                <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
                  {destinations.map((dest) => (
                    <Card
                      key={dest.id}
                      onClick={() => setSelectedDestination(dest.id)}
                      className={`
                        flex-shrink-0 w-32 cursor-pointer transition-all duration-300 p-4 text-center
                        ${selectedDestination === dest.id 
                          ? 'bg-[#c9a961] text-[#1a1410] scale-105' 
                          : 'bg-[#251f1a] border-[#c9a961]/20 hover:border-[#c9a961]/40'
                        }
                      `}
                    >
                      <div className="text-3xl mb-2">{dest.icon}</div>
                      <span className="text-xs font-medium">{dest.name}</span>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {selectedTransport && selectedDestination && (
              <Button 
                onClick={handleStartOrder}
                className="w-full bg-gradient-to-r from-[#c9a961] to-[#8b7355] text-[#1a1410] hover:glow-gold-strong font-semibold text-lg py-6 animate-scale-in"
              >
                Оформить заявку
              </Button>
            )}
          </main>
        )}

        {viewMode === 'order' && (
          <main className="p-5 pb-64 animate-fade-in">
            <Button
              variant="ghost"
              onClick={() => setViewMode('main')}
              className="mb-4 text-[#c9a961] hover:text-[#e6d5b8]"
            >
              <Icon name="ArrowLeft" className="mr-2" />
              Назад
            </Button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#c9a961] mb-2">Оформление заявки</h2>
              <p className="text-[#8b7355] text-sm">Заполните данные для расчёта стоимости</p>
            </div>

            <Card className="bg-[#251f1a] border-[#c9a961]/20 p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-[#c9a961] mb-2">Откуда</Label>
                  <Input 
                    placeholder="Город отправления" 
                    className="bg-[#1a1410] border-[#c9a961]/20 text-[#c9a961] placeholder:text-[#8b7355]"
                  />
                </div>

                <div>
                  <Label className="text-[#c9a961] mb-2">Куда</Label>
                  <Input 
                    placeholder="Город назначения" 
                    className="bg-[#1a1410] border-[#c9a961]/20 text-[#c9a961] placeholder:text-[#8b7355]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-[#c9a961] mb-2">Вес, кг</Label>
                    <Input 
                      type="number"
                      placeholder="1000" 
                      className="bg-[#1a1410] border-[#c9a961]/20 text-[#c9a961]"
                    />
                  </div>
                  <div>
                    <Label className="text-[#c9a961] mb-2">Объём, м³</Label>
                    <Input 
                      type="number"
                      placeholder="5" 
                      className="bg-[#1a1410] border-[#c9a961]/20 text-[#c9a961]"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-[#c9a961] mb-2">Описание груза</Label>
                  <Textarea 
                    placeholder="Укажите особенности, ценность груза..."
                    className="bg-[#1a1410] border-[#c9a961]/20 text-[#c9a961] placeholder:text-[#8b7355] min-h-[100px]"
                  />
                </div>
              </div>
            </Card>

            {(requiresArmedEscort || armedEscort) && (
              <Card className="bg-gradient-to-br from-[#c9a961]/10 to-[#8b7355]/10 border-[#c9a961]/30 p-6 mb-6 animate-scale-in">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a961]/20 flex items-center justify-center">
                    <Icon name="Shield" className="text-[#c9a961]" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Checkbox 
                        id="armed-escort" 
                        checked={armedEscort || requiresArmedEscort}
                        onCheckedChange={(checked) => setArmedEscort(checked as boolean)}
                        disabled={requiresArmedEscort}
                        className="border-[#c9a961]"
                      />
                      <Label htmlFor="armed-escort" className="text-[#c9a961] font-semibold cursor-pointer">
                        Вооружённое сопровождение
                      </Label>
                    </div>
                    <p className="text-[#8b7355] text-sm mb-2">
                      {requiresArmedEscort 
                        ? 'Обязательно при доставке в красные зоны и на месторождения'
                        : 'Рекомендуется для ценных грузов'
                      }
                    </p>
                    <p className="text-[#c9a961] font-bold">от 500 000₽</p>
                  </div>
                </div>
              </Card>
            )}

            <Button className="w-full bg-gradient-to-r from-[#c9a961] to-[#8b7355] text-[#1a1410] hover:glow-gold-strong font-semibold text-lg py-6">
              Рассчитать стоимость
            </Button>
          </main>
        )}

        <footer className="fixed bottom-0 left-0 right-0 bg-[#1a1410]/98 backdrop-blur-xl border-t border-[#c9a961]/10">
          <div className="max-w-md mx-auto">
            <div className="p-4 border-b border-[#c9a961]/10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-[#c9a961] uppercase tracking-wider">H&C Group Shop</h4>
                <Button variant="ghost" size="sm" className="text-[#8b7355] hover:text-[#c9a961]">
                  <span className="text-xs">Все товары</span>
                  <Icon name="ChevronRight" size={16} className="ml-1" />
                </Button>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {shopProducts.map((product, idx) => (
                  <Card 
                    key={idx}
                    className="flex-shrink-0 w-52 bg-[#251f1a] border-[#c9a961]/20 p-4 hover:border-[#c9a961]/40 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{product.image}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#c9a961] text-sm font-semibold mb-1 line-clamp-2">{product.name}</p>
                        <p className="text-[#8b7355] text-xs font-bold">{product.price}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="p-4">
              <h4 className="text-xs font-semibold text-[#8b7355] mb-3 uppercase tracking-wider">Предложения партнёров</h4>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {partners.map((partner, idx) => (
                  <Card 
                    key={idx}
                    className="flex-shrink-0 w-48 bg-[#251f1a] border-[#c9a961]/10 p-3 hover:border-[#c9a961]/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-xl">{partner.image}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#c9a961] text-xs font-medium truncate">{partner.name}</p>
                        <p className="text-[#8b7355] text-xs">{partner.category}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
