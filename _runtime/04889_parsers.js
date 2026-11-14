// _runtime/04889_parsers.js
import _mod4890 from "metro/04890__.js";
import _mod4892 from "metro/04892__.js";
import _mod4895 from "metro/04895__.js";
import _mod4896 from "metro/04896__.js";
import _mod4897 from "metro/04897__.js";
import _mod4898 from "metro/04898__.js";
import _mod4899 from "metro/04899__.js";
import _mod4900 from "metro/04900__.js";
import _mod4901 from "metro/04901__.js";
import _mod4902 from "metro/04902__.js";
import _mod4904 from "metro/04904__.js";
import _mod4906 from "metro/04906__.js";
import _mod4907 from "metro/04907__.js";
import _mod4908 from "metro/04908__.js";
import _mod4910 from "metro/04910__.js";
import _mod4911 from "metro/04911__.js";
import _mod4912 from "metro/04912__.js";
import _mod4914 from "metro/04914__.js";
import _mod4915 from "metro/04915__.js";
import _mod4916 from "metro/04916__.js";
import _mod4917 from "metro/04917__.js";
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
const eraParser = new _mod4890.EraParser();
point.G = eraParser;
const yearParser = new _mod4892.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4895.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4896.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4897.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4898.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4899.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4900.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4901.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4902.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4904.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4906.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4907.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4908.DayParser();
point.E = dayParser;
const localDayParser = new _mod4910.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4911.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4912.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4914.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4915.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4916.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4917.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4918.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4919.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4920.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4921.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4922.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4923.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4924.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4925.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4926.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4927.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
