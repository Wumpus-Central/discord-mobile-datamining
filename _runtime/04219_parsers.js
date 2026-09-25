// _runtime/04219_parsers.js
import _mod4220 from "metro/04220__.js";
import _mod4222 from "metro/04222__.js";
import _mod4225 from "metro/04225__.js";
import _mod4226 from "metro/04226__.js";
import _mod4227 from "metro/04227__.js";
import _mod4228 from "metro/04228__.js";
import _mod4229 from "metro/04229__.js";
import _mod4230 from "metro/04230__.js";
import _mod4231 from "metro/04231__.js";
import _mod4232 from "metro/04232__.js";
import _mod4234 from "metro/04234__.js";
import _mod4236 from "metro/04236__.js";
import _mod4237 from "metro/04237__.js";
import _mod4238 from "metro/04238__.js";
import _mod4240 from "metro/04240__.js";
import _mod4241 from "metro/04241__.js";
import _mod4242 from "metro/04242__.js";
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
import _mod4254 from "metro/04254__.js";
import _mod4255 from "metro/04255__.js";
import _mod4256 from "metro/04256__.js";
import _mod4257 from "metro/04257__.js";

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
const eraParser = new _mod4220.EraParser();
point.G = eraParser;
const yearParser = new _mod4222.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4225.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4226.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4227.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4228.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4229.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4230.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4231.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4232.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4234.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4236.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4237.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4238.DayParser();
point.E = dayParser;
const localDayParser = new _mod4240.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4241.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4242.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4244.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4245.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4246.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4247.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4248.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4249.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4250.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4251.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4252.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4253.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4254.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4255.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4256.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4257.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
