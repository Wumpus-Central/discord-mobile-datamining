// _runtime/04754_parsers.js
import _mod4755 from "metro/04755__.js";
import _mod4757 from "metro/04757__.js";
import _mod4760 from "metro/04760__.js";
import _mod4761 from "metro/04761__.js";
import _mod4762 from "metro/04762__.js";
import _mod4763 from "metro/04763__.js";
import _mod4764 from "metro/04764__.js";
import _mod4765 from "metro/04765__.js";
import _mod4766 from "metro/04766__.js";
import _mod4767 from "metro/04767__.js";
import _mod4769 from "metro/04769__.js";
import _mod4771 from "metro/04771__.js";
import _mod4772 from "metro/04772__.js";
import _mod4773 from "metro/04773__.js";
import _mod4775 from "metro/04775__.js";
import _mod4776 from "metro/04776__.js";
import _mod4777 from "metro/04777__.js";
import _mod4779 from "metro/04779__.js";
import _mod4780 from "metro/04780__.js";
import _mod4781 from "metro/04781__.js";
import _mod4782 from "metro/04782__.js";
import _mod4783 from "metro/04783__.js";
import _mod4784 from "metro/04784__.js";
import _mod4785 from "metro/04785__.js";
import _mod4786 from "metro/04786__.js";
import _mod4787 from "metro/04787__.js";
import _mod4788 from "metro/04788__.js";
import _mod4789 from "metro/04789__.js";
import _mod4790 from "metro/04790__.js";
import _mod4791 from "metro/04791__.js";
import _mod4792 from "metro/04792__.js";

const point = {
  G: null,
  y: null,
  Y: null,
  R: null,
  u: null,
  Q: null,
  q: null,
  M: null,
  L: null,
  w: null,
  I: null,
  d: null,
  D: null,
  E: null,
  e: null,
  c: null,
  i: null,
  a: null,
  b: null,
  B: null,
  h: null,
  H: null,
  K: null,
  k: null,
  m: null,
  s: null,
  S: null,
  X: null,
  x: null,
  t: null,
  T: null,
};
const eraParser = new _mod4755.EraParser();
point.G = eraParser;
const yearParser = new _mod4757.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4760.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4761.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4762.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4763.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4764.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4765.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4766.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4767.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4769.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4771.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4772.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4773.DayParser();
point.E = dayParser;
const localDayParser = new _mod4775.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4776.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4777.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4779.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4780.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4781.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4782.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4783.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4784.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4785.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4786.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4787.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4788.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4789.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4790.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4791.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4792.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
