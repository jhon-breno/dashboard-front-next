import { DollarSign, Users, ShoppingBag, PackageCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CardsBoard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Total Vendas
            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4" />
          </div>
          <CardDescription>Total vendas em 90 dias</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">R$ 40.359,96</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Novos Clientes
            </CardTitle>
            <Users className="ml-auto w-4 h-4" />
          </div>
          <CardDescription>Novos clientes em 90 dias</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">153</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Pedidos Hoje
            </CardTitle>
            <ShoppingBag className="ml-auto w-4 h-4" />
          </div>
          <CardDescription>Total de pedidos hoje</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">36</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Total Pedidos
            </CardTitle>
            <PackageCheck className="ml-auto w-4 h-4" />
          </div>
          <CardDescription>Total pedidos em 90 dias</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">4.236</p>
        </CardContent>
      </Card>
    </>
  );
};

export default CardsBoard;
