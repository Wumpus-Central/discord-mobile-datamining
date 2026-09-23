// _runtime/04215_parsers.js
import _mod4216 from "metro/04216__.js";
import _mod4218 from "metro/04218__.js";
import _mod4221 from "metro/04221__.js";
import _mod4222 from "metro/04222__.js";
import _mod4223 from "metro/04223__.js";
import _mod4224 from "metro/04224__.js";
import _mod4225 from "metro/04225__.js";
import _mod4226 from "metro/04226__.js";
import _mod4227 from "metro/04227__.js";
import _mod4228 from "metro/04228__.js";
import _mod4230 from "metro/04230__.js";
import _mod4232 from "metro/04232__.js";
import _mod4233 from "metro/04233__.js";
import _mod4234 from "metro/04234__.js";
import _mod4236 from "metro/04236__.js";
import _mod4237 from "metro/04237__.js";
import _mod4238 from "metro/04238__.js";
import _mod4240 from "metro/04240__.js";
import _mod4241 from "metro/04241__.js";
import _mod4242 from "metro/04242__.js";
import _mod4243 from "metro/04243__.js";
import _mod4244 from "metro/04244__.js";
import _mod4245 from "metro/04245__.js";
import _mod4246 from "metro/04246__.js";
import _mod4247 from "metro/04247__.js";
import _mod4248 from "metro/04248__.js";
import _mod4249 from "metro/04249__.js";
import _mod4250 from "metro/04250__.js";
import _mod4251 from "metro/04251__.js";
import _mod4252 from "metro/04252__.js";
import _mod4253 from "metro/04253__.js";

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
const eraParser = new _mod4216.EraParser();
point.G = eraParser;
const yearParser = new _mod4218.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4221.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4222.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4223.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4224.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4225.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4226.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4227.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4228.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4230.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4232.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4233.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4234.DayParser();
point.E = dayParser;
const localDayParser = new _mod4236.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4237.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4238.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4240.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4241.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4242.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4243.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4244.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4245.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4246.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4247.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4248.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4249.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4250.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4251.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4252.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4253.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
