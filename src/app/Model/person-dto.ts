import { ScheduleDto } from "./schedule-dto";

export interface PersonDto {
    idPerson: number | null;
    lastname: string;
    firstname: string;
    schedules?: ScheduleDto[];
  }