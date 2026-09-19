// _runtime/04149_parsers.js
import _mod4150 from "metro/04150__.js";
import _mod4152 from "metro/04152__.js";
import _mod4155 from "metro/04155__.js";
import _mod4156 from "metro/04156__.js";
import _mod4157 from "metro/04157__.js";
import _mod4158 from "metro/04158__.js";
import _mod4159 from "metro/04159__.js";
import _mod4160 from "metro/04160__.js";
import _mod4161 from "metro/04161__.js";
import _mod4162 from "metro/04162__.js";
import _mod4164 from "metro/04164__.js";
import _mod4166 from "metro/04166__.js";
import _mod4167 from "metro/04167__.js";
import _mod4168 from "metro/04168__.js";
import _mod4170 from "metro/04170__.js";
import _mod4171 from "metro/04171__.js";
import _mod4172 from "metro/04172__.js";
import _mod4174 from "metro/04174__.js";
import _mod4175 from "metro/04175__.js";
import _mod4176 from "metro/04176__.js";
import _mod4177 from "metro/04177__.js";
import _mod4178 from "metro/04178__.js";
import _mod4179 from "metro/04179__.js";
import _mod4180 from "metro/04180__.js";
import _mod4181 from "metro/04181__.js";
import _mod4182 from "metro/04182__.js";
import _mod4183 from "metro/04183__.js";
import _mod4184 from "metro/04184__.js";
import _mod4185 from "metro/04185__.js";
import _mod4186 from "metro/04186__.js";
import _mod4187 from "metro/04187__.js";

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
const eraParser = new _mod4150.EraParser();
point.G = eraParser;
const yearParser = new _mod4152.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4155.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4156.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4157.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4158.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4159.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4160.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4161.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4162.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4164.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4166.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4167.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4168.DayParser();
point.E = dayParser;
const localDayParser = new _mod4170.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4171.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4172.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4174.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4175.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4176.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4177.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4178.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4179.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4180.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4181.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4182.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4183.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4184.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4185.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4186.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4187.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
