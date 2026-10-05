// _runtime/10166_Meridiem.js
const obj = { AM: 0, PM: 1 };
obj[0] = "AM";
obj[1] = "PM";
const obj2 = { SUNDAY: 0, MONDAY: 1, TUESDAY: 2, WEDNESDAY: 3, THURSDAY: 4, FRIDAY: 5, SATURDAY: 6 };
obj2[0] = "SUNDAY";
obj2[1] = "MONDAY";
obj2[2] = "TUESDAY";
obj2[3] = "WEDNESDAY";
obj2[4] = "THURSDAY";
obj2[5] = "FRIDAY";
obj2[6] = "SATURDAY";
const obj3 = {
  JANUARY: 1,
  FEBRUARY: 2,
  MARCH: 3,
  APRIL: 4,
  MAY: 5,
  JUNE: 6,
  JULY: 7,
  AUGUST: 8,
  SEPTEMBER: 9,
  OCTOBER: 10,
  NOVEMBER: 11,
  DECEMBER: 12,
};
obj3[1] = "JANUARY";
obj3[2] = "FEBRUARY";
obj3[3] = "MARCH";
obj3[4] = "APRIL";
obj3[5] = "MAY";
obj3[6] = "JUNE";
obj3[7] = "JULY";
obj3[8] = "AUGUST";
obj3[9] = "SEPTEMBER";
obj3[10] = "OCTOBER";
obj3[11] = "NOVEMBER";
obj3[12] = "DECEMBER";

export const Meridiem = obj;
export const Weekday = obj2;
export const Month = obj3;
