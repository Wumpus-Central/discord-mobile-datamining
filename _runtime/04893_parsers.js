// _runtime/04893_parsers.js
import _mod4894 from "metro/04894__.js";
import _mod4896 from "metro/04896__.js";
import _mod4899 from "metro/04899__.js";
import _mod4900 from "metro/04900__.js";
import _mod4901 from "metro/04901__.js";
import _mod4902 from "metro/04902__.js";
import _mod4903 from "metro/04903__.js";
import _mod4904 from "metro/04904__.js";
import _mod4905 from "metro/04905__.js";
import _mod4906 from "metro/04906__.js";
import _mod4908 from "metro/04908__.js";
import _mod4910 from "metro/04910__.js";
import _mod4911 from "metro/04911__.js";
import _mod4912 from "metro/04912__.js";
import _mod4914 from "metro/04914__.js";
import _mod4915 from "metro/04915__.js";
import _mod4916 from "metro/04916__.js";
import _mod4918 from "metro/04918__.js";
import _mod4919 from "metro/04919__.js";
import _mod4920 from "metro/04920__.js";
import _mod4921 from "metro/04921__.js";
import _mod4922 from "metro/04922__.js";
import _mod4923 from "metro/04923__.js";
import _mod4924 from "metro/04924__.js";
import _mod4925 from "metro/04925__.js";
import _mod4926 from "metro/04926__.js";
import _mod4927 from "metro/04927__.js";
import _mod4928 from "metro/04928__.js";
import _mod4929 from "metro/04929__.js";
import _mod4930 from "metro/04930__.js";
import _mod4931 from "metro/04931__.js";

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
const eraParser = new _mod4894.EraParser();
point.G = eraParser;
const yearParser = new _mod4896.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4899.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4900.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4901.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4902.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4903.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4904.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4905.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4906.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4908.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4910.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4911.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4912.DayParser();
point.E = dayParser;
const localDayParser = new _mod4914.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4915.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4916.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4918.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4919.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4920.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4921.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4922.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4923.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4924.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4925.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4926.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4927.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4928.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4929.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4930.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4931.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
