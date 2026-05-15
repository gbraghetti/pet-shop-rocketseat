import { AppointmentCard } from "@/components/appointment-card";
import { AppointmentPeriod } from "@/types/appointment";
import { Cloudy, MoonStar, Sun } from "lucide-react";
// import { Bell, CloudSun, Moon } from "phosphor-react";
// import { WiDayCloudy, winigh } from "react-icons/wi";
// import { MdNotificationsActive } from "react-icons/md";

type PeriodSectionProps = {
  period: AppointmentPeriod;
};

const periodIcons = {
  morning: <Cloudy className="text-accent-blue" />,
  afternoon: <MoonStar className="text-accent-orange" />,
  evening: <Sun className="text-accent-yellow" />,
};

export const PeriodSection = ({ period }: PeriodSectionProps) => {
  return (
    <section className="mb-8 bg-background-tertiary rounded-xl">
      <div className="flex items-center px-5 py-3 justify-between border-b border-border-divisor">
        <div className="flex items-center gap-2">
          {periodIcons[period?.type]}
          <h2 className="text-label-large-size text-content-primary">
            {period?.title}
          </h2>
        </div>
        <span className="text-label-large-size text-content-secondary">
          {period.timeRange}
        </span>
      </div>

      {period.appointments.length > 0 ? (
        <div className="px-5">
          <div>
            {period.appointments.map((appointment, index) => (
              <AppointmentCard
                key={index}
                appointment={appointment}
                isFirstInSection={index === 0}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-paragraph-small-size text-content-secondary p-5">
          Nenhum agendamento para este período.
        </p>
      )}
    </section>
  );
};
