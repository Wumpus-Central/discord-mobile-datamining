// _runtime/04724_parsers.js
import _mod4725 from "metro/04725__.js";
import _mod4727 from "metro/04727__.js";
import _mod4730 from "metro/04730__.js";
import _mod4731 from "metro/04731__.js";
import _mod4732 from "metro/04732__.js";
import _mod4733 from "metro/04733__.js";
import _mod4734 from "metro/04734__.js";
import _mod4735 from "metro/04735__.js";
import _mod4736 from "metro/04736__.js";
import _mod4737 from "metro/04737__.js";
import _mod4739 from "metro/04739__.js";
import _mod4741 from "metro/04741__.js";
import _mod4742 from "metro/04742__.js";
import _mod4743 from "metro/04743__.js";
import _mod4745 from "metro/04745__.js";
import _mod4746 from "metro/04746__.js";
import _mod4747 from "metro/04747__.js";
import _mod4749 from "metro/04749__.js";
import _mod4750 from "metro/04750__.js";
import _mod4751 from "metro/04751__.js";
import _mod4752 from "metro/04752__.js";
import _mod4753 from "metro/04753__.js";
import _mod4754 from "metro/04754__.js";
import _mod4755 from "metro/04755__.js";
import _mod4756 from "metro/04756__.js";
import _mod4757 from "metro/04757__.js";
import _mod4758 from "metro/04758__.js";
import _mod4759 from "metro/04759__.js";
import _mod4760 from "metro/04760__.js";
import _mod4761 from "metro/04761__.js";
import _mod4762 from "metro/04762__.js";

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
const eraParser = new _mod4725.EraParser();
point.G = eraParser;
const yearParser = new _mod4727.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4730.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4731.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4732.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4733.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4734.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4735.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4736.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4737.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4739.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4741.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4742.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4743.DayParser();
point.E = dayParser;
const localDayParser = new _mod4745.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4746.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4747.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4749.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4750.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4751.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4752.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4753.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4754.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4755.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4756.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4757.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4758.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4759.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4760.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4761.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4762.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
