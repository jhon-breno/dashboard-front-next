import { CircleDollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const Sales = () => {
  return (
    <Card className="flex-1 max-h-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimas Vendas
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Últimas vendas nas últimas 24 horas</CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex items-center gap-4 border-b py-2">
          <Avatar className="h-10 w-10">
            <Link href="https://github.com/jhon-breno" target="_blank">
              <AvatarImage src="https://github.com/jhon-breno.png" />
            </Link>
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Jhon Breno</p>
            <span className="text-[12px] sm:text:sm  text-gray-400">
              jhonbreno@gmail.com
            </span>
          </div>
        </article>

        <article className="flex items-center gap-4 border-b py-2">
          <Avatar className="h-10 w-10">
            <Link href="https://github.com/devfraga" target="_blank">
              <AvatarImage src="https://github.com/devfraga.png" />
            </Link>
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Sujeito Programador
            </p>
            <span className="text-[12px] sm:text:sm text-gray-400">
              sujeitoprogramador@dev.com
            </span>
          </div>
        </article>

        <article className="flex items-center gap-4 border-b py-2">
          <Avatar className="h-10 w-10">
            <Link href="https://github.com/felipemotarocha" target="_blank">
              <AvatarImage src="https://github.com/felipemotarocha.png" />
            </Link>
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Felipe Rocha - FSC
            </p>
            <span className="text-[12px] sm:text:sm text-gray-400">
              felipe@fullstackclub.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

export default Sales;
