import { useWeatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWeather";

export const useWheather = async () => {
  const temperatura = await getTemperatura();
  const weatherStore = useWeatherStore();
  weatherStore.temperatura = temperatura;
};
