import CardsBoard from "@/components/card";
import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";

export default function Home() {
  return (
    <div>
      <h1 className="sm:ml-16 p-4">
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <CardsBoard />
        </section>

        <section className="flex flex-col mt-4 md:flex-row gap-4">
          <ChartOverview />
          <Sales />
        </section>
      </h1>
    </div>
  );
}
