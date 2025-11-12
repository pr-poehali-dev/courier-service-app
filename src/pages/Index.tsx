import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

type TransportType = 'courier' | 'truck5t' | 'highway' | 'air' | 'rail' | 'sea';
type ViewMode = 'main' | 'tracking' | 'courier' | 'carrier';

interface TrackingData {
  id: string;
  status: string;
  carrier: string;
  location: string;
  eta: string;
  type: TransportType;
}

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('main');
  const [trackingId, setTrackingId] = useState('');
  const [selectedTransport, setSelectedTransport] = useState<TransportType | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [courierEnergy, setCourierEnergy] = useState(85);

  const trackingData: TrackingData = {
    id: 'HCL-2024-78945',
    status: 'В пути',
    carrier: 'ООО "Быстрая Доставка"',
    location: 'г. Москва, МКАД 95км',
    eta: '2 ч 35 мин',
    type: 'courier'
  };

  const transportTypes = [
    { id: 'courier' as TransportType, name: 'Курьер', icon: 'Bike', color: 'from-[#D4AF37] to-[#F4D03F]' },
    { id: 'truck5t' as TransportType, name: 'До 5 тонн', icon: 'Truck', color: 'from-[#D4AF37] to-[#F4D03F]' },
    { id: 'highway' as TransportType, name: 'Магистральный', icon: 'TruckIcon', color: 'from-[#D4AF37] to-[#F4D03F]' },
    { id: 'air' as TransportType, name: 'Авиа', icon: 'Plane', color: 'from-[#D4AF37] to-[#F4D03F]' },
    { id: 'rail' as TransportType, name: 'ЖД', icon: 'Train', color: 'from-[#D4AF37] to-[#F4D03F]' },
    { id: 'sea' as TransportType, name: 'Море', icon: 'Ship', color: 'from-[#D4AF37] to-[#F4D03F]' }
  ];

  const partners = [
    { name: 'Скидка 20% на упаковку', category: 'Материалы', image: '📦' },
    { name: 'Кофе для водителей -15%', category: 'Еда', image: '☕' },
    { name: 'Страхование груза', category: 'Услуги', image: '🛡️' }
  ];

  const handleTrackCargo = () => {
    if (trackingId.trim()) {
      setViewMode('tracking');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-[#F4D03F]">
      <div className="max-w-md mx-auto">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A1628]/90 border-b border-[#D4AF37]/20">
          <div className="flex items-center justify-between p-4">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="glow-gold hover:glow-gold-strong transition-all">
                  <Icon name="Menu" className="text-[#D4AF37]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-[#1A2B4A] border-[#D4AF37]/30 w-80">
                <div className="flex flex-col h-full">
                  <div className="mb-8 mt-4">
                    <h2 className="text-2xl font-bold text-[#F4D03F] text-glow">H&C Logistics</h2>
                    <p className="text-[#D4AF37]/70 text-sm mt-1">Ваш путь к успеху</p>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-[#F4D03F] hover:bg-[#D4AF37]/10 hover:glow-gold transition-all"
                      onClick={() => {
                        setViewMode('courier');
                        setSidebarOpen(false);
                      }}
                    >
                      <Icon name="Bike" className="mr-3" />
                      <span className="font-medium">Курьеринг</span>
                    </Button>
                    
                    <Button 
                      variant="ghost"
                      className="w-full justify-start text-[#F4D03F] hover:bg-[#D4AF37]/10 hover:glow-gold transition-all"
                      onClick={() => {
                        setViewMode('carrier');
                        setSidebarOpen(false);
                      }}
                    >
                      <Icon name="Truck" className="mr-3" />
                      <span className="font-medium">Перевозчик</span>
                    </Button>
                    
                    <Separator className="bg-[#D4AF37]/20" />
                    
                    <Button 
                      variant="ghost"
                      className="w-full justify-start text-[#D4AF37]/70 hover:bg-[#D4AF37]/10"
                      onClick={() => {
                        setViewMode('main');
                        setSidebarOpen(false);
                      }}
                    >
                      <Icon name="Home" className="mr-3" />
                      <span>Главная</span>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start text-[#D4AF37]/70 hover:bg-[#D4AF37]/10">
                      <Icon name="User" className="mr-3" />
                      <span>Профиль</span>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start text-[#D4AF37]/70 hover:bg-[#D4AF37]/10">
                      <Icon name="Settings" className="mr-3" />
                      <span>Настройки</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <h1 className="text-xl font-bold text-[#F4D03F] text-glow">H&C Logistics</h1>
            
            <Button variant="ghost" size="icon" className="glow-gold">
              <Icon name="Bell" className="text-[#D4AF37]" />
            </Button>
          </div>
        </header>

        {viewMode === 'main' && (
          <main className="p-4 pb-32 animate-fade-in">
            <Card className="bg-gradient-to-br from-[#1A2B4A] to-[#0A1628] border-[#D4AF37]/30 p-6 mb-6 glow-gold">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#F4D03F]">Мой груз</h2>
                <Icon name="Package" className="text-[#D4AF37]" />
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Введите ID груза"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="bg-[#0A1628] border-[#D4AF37]/30 text-[#F4D03F] placeholder:text-[#D4AF37]/50"
                />
                <Button 
                  onClick={handleTrackCargo}
                  className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] hover:glow-gold-strong transition-all font-semibold"
                >
                  <Icon name="Search" />
                </Button>
              </div>
            </Card>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#D4AF37] mb-4 uppercase tracking-wider">Выберите тип транспорта</h3>
              <div className="grid grid-cols-3 gap-3">
                {transportTypes.map((transport) => (
                  <Card
                    key={transport.id}
                    onClick={() => setSelectedTransport(transport.id)}
                    className={`
                      cursor-pointer transition-all duration-300 p-4 flex flex-col items-center justify-center gap-2
                      ${selectedTransport === transport.id 
                        ? 'bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] glow-gold-strong scale-105' 
                        : 'bg-[#1A2B4A] border-[#D4AF37]/30 hover:glow-gold hover:scale-105'
                      }
                    `}
                  >
                    <Icon 
                      name={transport.icon as any} 
                      size={28}
                      className={selectedTransport === transport.id ? 'text-[#0A1628]' : 'text-[#D4AF37]'}
                    />
                    <span className={`text-xs font-medium text-center ${
                      selectedTransport === transport.id ? 'text-[#0A1628]' : 'text-[#F4D03F]'
                    }`}>
                      {transport.name}
                    </span>
                  </Card>
                ))}
              </div>
            </div>

            {selectedTransport === 'courier' && (
              <Card className="bg-[#1A2B4A] border-[#D4AF37]/30 p-4 mb-6 animate-scale-in">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-[#F4D03F]">Тип отправления</h4>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 border-[#D4AF37]/30 text-[#F4D03F] hover:bg-[#D4AF37]/10">
                    <Icon name="FileText" className="mr-2" size={16} />
                    Документы
                  </Button>
                  <Button variant="outline" className="flex-1 border-[#D4AF37]/30 text-[#F4D03F] hover:bg-[#D4AF37]/10">
                    <Icon name="Package" className="mr-2" size={16} />
                    Посылки
                  </Button>
                </div>
              </Card>
            )}

            {selectedTransport && (
              <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] hover:glow-gold-strong font-semibold text-lg py-6 animate-scale-in">
                Оформить заявку
              </Button>
            )}
          </main>
        )}

        {viewMode === 'tracking' && (
          <main className="p-4 pb-32 animate-fade-in">
            <Button
              variant="ghost"
              onClick={() => setViewMode('main')}
              className="mb-4 text-[#D4AF37] hover:text-[#F4D03F]"
            >
              <Icon name="ArrowLeft" className="mr-2" />
              Назад
            </Button>

            <Card className="bg-[#1A2B4A] border-[#D4AF37]/30 p-6 mb-4 glow-gold">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#F4D03F]">Трекинг груза</h2>
                <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628]">
                  {trackingData.status}
                </Badge>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#D4AF37]/70">ID груза:</span>
                  <span className="text-[#F4D03F] font-mono">{trackingData.id}</span>
                </div>
                <Separator className="bg-[#D4AF37]/20" />
                <div className="flex justify-between">
                  <span className="text-[#D4AF37]/70">Перевозчик:</span>
                  <span className="text-[#F4D03F]">{trackingData.carrier}</span>
                </div>
                <Separator className="bg-[#D4AF37]/20" />
                <div className="flex justify-between">
                  <span className="text-[#D4AF37]/70">Местоположение:</span>
                  <span className="text-[#F4D03F]">{trackingData.location}</span>
                </div>
                <Separator className="bg-[#D4AF37]/20" />
                <div className="flex justify-between items-center">
                  <span className="text-[#D4AF37]/70">Прибытие через:</span>
                  <span className="text-[#F4D03F] font-bold text-glow">{trackingData.eta}</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-[#1A2B4A] to-[#0A1628] border-[#D4AF37]/30 p-6 glow-gold animate-glow-pulse">
              <div className="flex items-center justify-center h-64 text-[#D4AF37]/50">
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="mx-auto mb-4 text-[#D4AF37]" />
                  <p>Интерактивная карта</p>
                  <p className="text-xs mt-2">с трекингом в реальном времени</p>
                </div>
              </div>
            </Card>
          </main>
        )}

        {viewMode === 'courier' && (
          <main className="p-4 pb-32 animate-fade-in">
            <Button
              variant="ghost"
              onClick={() => setViewMode('main')}
              className="mb-4 text-[#D4AF37] hover:text-[#F4D03F]"
            >
              <Icon name="ArrowLeft" className="mr-2" />
              Назад
            </Button>

            <Card className="bg-gradient-to-br from-[#1A2B4A] to-[#0A1628] border-[#D4AF37]/30 p-6 mb-4 glow-gold">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center glow-gold-strong">
                  <span className="text-3xl">🚀</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#F4D03F] text-glow">H&C Logistics</h2>
                  <p className="text-[#D4AF37]/70 text-sm">Маскот компании</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-[#D4AF37]/70">Энергия до переработки</span>
                  <span className="text-[#F4D03F] font-bold">{courierEnergy}%</span>
                </div>
                <div className="h-3 bg-[#0A1628] rounded-full overflow-hidden border border-[#D4AF37]/30">
                  <div 
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] transition-all duration-500 animate-glow-pulse"
                    style={{ width: `${courierEnergy}%` }}
                  />
                </div>
              </div>

              <Badge className="bg-[#D4AF37]/20 text-[#F4D03F] border-[#D4AF37]/30">
                На линии
              </Badge>
            </Card>

            <Card className="bg-[#1A2B4A] border-[#D4AF37]/30 p-6">
              <h3 className="text-lg font-semibold text-[#F4D03F] mb-4">Регистрация курьера</h3>
              <div className="space-y-4">
                <Input placeholder="ФИО" className="bg-[#0A1628] border-[#D4AF37]/30 text-[#F4D03F]" />
                <Input placeholder="Телефон" className="bg-[#0A1628] border-[#D4AF37]/30 text-[#F4D03F]" />
                <Input placeholder="Email" className="bg-[#0A1628] border-[#D4AF37]/30 text-[#F4D03F]" />
                <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] hover:glow-gold-strong font-semibold">
                  Зарегистрироваться
                </Button>
              </div>
            </Card>
          </main>
        )}

        {viewMode === 'carrier' && (
          <main className="p-4 pb-32 animate-fade-in">
            <Button
              variant="ghost"
              onClick={() => setViewMode('main')}
              className="mb-4 text-[#D4AF37] hover:text-[#F4D03F]"
            >
              <Icon name="ArrowLeft" className="mr-2" />
              Назад
            </Button>

            <Card className="bg-[#1A2B4A] border-[#D4AF37]/30 p-6 mb-4 glow-gold">
              <h3 className="text-lg font-semibold text-[#F4D03F] mb-4">Вход для перевозчика</h3>
              <div className="space-y-4">
                <Input 
                  placeholder="Введите ИНН" 
                  className="bg-[#0A1628] border-[#D4AF37]/30 text-[#F4D03F] placeholder:text-[#D4AF37]/50"
                />
                <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] hover:glow-gold-strong font-semibold">
                  Войти
                </Button>
              </div>
            </Card>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">Активные заявки</h4>
              
              {[1, 2].map((i) => (
                <Card key={i} className="bg-[#1A2B4A] border-[#D4AF37]/30 p-4 hover:glow-gold transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="text-[#F4D03F] font-semibold">Заявка №{2024000 + i}</h5>
                      <p className="text-[#D4AF37]/70 text-xs">Москва → Санкт-Петербург</p>
                    </div>
                    <Badge className="bg-[#D4AF37]/20 text-[#F4D03F] border-[#D4AF37]/30">
                      Новая
                    </Badge>
                  </div>
                  <Separator className="bg-[#D4AF37]/20 my-2" />
                  <div className="flex justify-between text-xs">
                    <span className="text-[#D4AF37]/70">Требуется фото: погрузка/разгрузка</span>
                    <span className="text-[#F4D03F]">SLA: 48ч</span>
                  </div>
                </Card>
              ))}
            </div>
          </main>
        )}

        <footer className="fixed bottom-0 left-0 right-0 bg-[#0A1628]/95 backdrop-blur-xl border-t border-[#D4AF37]/20">
          <div className="max-w-md mx-auto">
            <div className="p-3">
              <h4 className="text-xs font-semibold text-[#D4AF37] mb-3 uppercase tracking-wider">Предложения партнеров</h4>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {partners.map((partner, idx) => (
                  <Card 
                    key={idx}
                    className="flex-shrink-0 w-48 bg-[#1A2B4A] border-[#D4AF37]/30 p-3 hover:glow-gold transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{partner.image}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#F4D03F] text-xs font-semibold truncate">{partner.name}</p>
                        <p className="text-[#D4AF37]/70 text-xs">{partner.category}</p>
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
