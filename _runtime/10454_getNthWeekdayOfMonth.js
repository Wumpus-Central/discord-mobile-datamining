// _runtime/10454_getNthWeekdayOfMonth.js
import _mod10455 from "metro/10455__.js";

require = arg1;
const exports = arg5;
const dependencyMap = arg6;
arg5.TIMEZONE_ABBR_MAP = undefined;
arg5.getNthWeekdayOfMonth = function getNthWeekdayOfMonth(arg0, arg1, arg2, arg3) {
  let sum1;
  let num = arg4;
  if (arg4 === undefined) {
    num = 0;
  }
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  if (0 < arg3) {
    do {
      let sum = num4 + 1;
      let _Date = Date;
      let tmp2 = new.target;
      let tmp3 = new.target;
      let tmp4 = arg0;
      let tmp5 = sum;
      let date = new Date(arg0, arg1 - 1, sum);
      let tmp6 = date;
      let tmp7 = num3;
      sum1 = num3;
      if (date.getDay() === arg2) {
        sum1 = num3 + 1;
      }
      num3 = sum1;
      num4 = sum;
      num2 = sum;
    } while (sum1 < arg3);
  }
  return new Date(arg0, arg1 - 1, num2, num);
};
arg5.getLastWeekdayOfMonth = function getLastWeekdayOfMonth(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  let num2 = 7;
  if (0 !== arg2) {
    num2 = arg2;
  }
  const date = new Date(arg0, arg1 - 1 + 1, 1, 12);
  let num3 = 7;
  if (0 !== date.getDay()) {
    num3 = date.getDay();
  }
  if (num3 === num2) {
    date.setDate(date.getDate() - 7);
    const _Date = Date;
    const diff = arg1 - 1;
    const date1 = new Date(arg0, diff, date.getDate(), num);
    return date1;
  } else if (num3 < num2) {
    num3 = 7 + num3;
    let diff1 = num3 - num2;
  } else {
    diff1 = num3 - num2;
  }
};
arg5.toTimezoneOffset = function toTimezoneOffset(formatted, instant, merged) {
  let obj = merged;
  if (merged === undefined) {
    obj = {};
  }
  if (null == formatted) {
    return null;
  } else if (typeof formatted === "number") {
    return formatted;
  } else {
    let obj2 = obj[formatted];
    if (null === obj2) {
      obj2 = exports.TIMEZONE_ABBR_MAP[formatted];
    }
    if (null == obj2) {
      return null;
    } else if (typeof obj2 === "number") {
      return obj2;
    } else if (null == instant) {
      return null;
    } else {
      if (instant > obj2.dstStart(instant.getFullYear())) {
        if (instant <= obj2.dstEnd(instant.getFullYear())) {
          return obj2.timezoneOffsetDuringDst;
        }
      }
      return obj2.timezoneOffsetNonDst;
    }
  }
};
let obj = {
  timezoneOffsetDuringDst: 120,
  timezoneOffsetNonDst: 60,
  dstStart(arg0) {
    const MARCH = _mod10455.Month.MARCH;
    const SUNDAY = _mod10455.Weekday.SUNDAY;
    let num = 7;
    if (0 !== SUNDAY) {
      num = SUNDAY;
    }
    const date = new Date(arg0, MARCH - 1 + 1, 1, 12);
    let num2 = 7;
    if (0 !== date.getDay()) {
      num2 = date.getDay();
    }
    if (num2 === num) {
      date.setDate(date.getDate() - 7);
      const _Date = Date;
      const diff = MARCH - 1;
      const date1 = new Date(arg0, diff, date.getDate(), 2);
      return date1;
    } else if (num2 < num) {
      num2 = 7 + num2;
      let diff1 = num2 - num;
    } else {
      diff1 = num2 - num;
    }
  },
  dstEnd(arg0) {
    const OCTOBER = _mod10455.Month.OCTOBER;
    const SUNDAY = _mod10455.Weekday.SUNDAY;
    let num = 7;
    if (0 !== SUNDAY) {
      num = SUNDAY;
    }
    const date = new Date(arg0, OCTOBER - 1 + 1, 1, 12);
    let num2 = 7;
    if (0 !== date.getDay()) {
      num2 = date.getDay();
    }
    if (num2 === num) {
      date.setDate(date.getDate() - 7);
      const _Date = Date;
      const diff = OCTOBER - 1;
      const date1 = new Date(arg0, diff, date.getDate(), 3);
      return date1;
    } else if (num2 < num) {
      num2 = 7 + num2;
      let diff1 = num2 - num;
    } else {
      diff1 = num2 - num;
    }
  },
};
obj = {
  timezoneOffsetDuringDst: -300,
  timezoneOffsetNonDst: -360,
  dstStart(arg0) {
    let sum;
    let sum1;
    const MARCH = _mod10455.Month.MARCH;
    let num = 0;
    let num2 = 0;
    do {
      sum = num2 + 1;
      let _Date = Date;
      let tmp3 = new.target;
      let tmp4 = new.target;
      let tmp5 = arg0;
      let tmp6 = sum;
      let date = new Date(arg0, MARCH - 1, sum);
      let tmp7 = date;
      let tmp8 = num;
      sum1 = num;
      if (date.getDay() === tmp) {
        sum1 = num + 1;
      }
      num = sum1;
      num2 = sum;
    } while (sum1 < 2);
    return new Date(arg0, MARCH - 1, sum, 2);
  },
  dstEnd(arg0) {
    let sum;
    let sum1;
    const NOVEMBER = _mod10455.Month.NOVEMBER;
    let num = 0;
    let num2 = 0;
    do {
      sum = num2 + 1;
      let _Date = Date;
      let tmp3 = new.target;
      let tmp4 = new.target;
      let tmp5 = arg0;
      let tmp6 = sum;
      let date = new Date(arg0, NOVEMBER - 1, sum);
      let tmp7 = date;
      let tmp8 = num;
      sum1 = num;
      if (date.getDay() === tmp) {
        sum1 = num + 1;
      }
      num = sum1;
      num2 = sum;
    } while (sum1 < 1);
    return new Date(arg0, NOVEMBER - 1, sum, 2);
  },
};
obj = {
  timezoneOffsetDuringDst: -240,
  timezoneOffsetNonDst: -300,
  dstStart(arg0) {
    let sum;
    let sum1;
    const MARCH = _mod10455.Month.MARCH;
    let num = 0;
    let num2 = 0;
    do {
      sum = num2 + 1;
      let _Date = Date;
      let tmp3 = new.target;
      let tmp4 = new.target;
      let tmp5 = arg0;
      let tmp6 = sum;
      let date = new Date(arg0, MARCH - 1, sum);
      let tmp7 = date;
      let tmp8 = num;
      sum1 = num;
      if (date.getDay() === tmp) {
        sum1 = num + 1;
      }
      num = sum1;
      num2 = sum;
    } while (sum1 < 2);
    return new Date(arg0, MARCH - 1, sum, 2);
  },
  dstEnd(arg0) {
    let sum;
    let sum1;
    const NOVEMBER = _mod10455.Month.NOVEMBER;
    let num = 0;
    let num2 = 0;
    do {
      sum = num2 + 1;
      let _Date = Date;
      let tmp3 = new.target;
      let tmp4 = new.target;
      let tmp5 = arg0;
      let tmp6 = sum;
      let date = new Date(arg0, NOVEMBER - 1, sum);
      let tmp7 = date;
      let tmp8 = num;
      sum1 = num;
      if (date.getDay() === tmp) {
        sum1 = num + 1;
      }
      num = sum1;
      num2 = sum;
    } while (sum1 < 1);
    return new Date(arg0, NOVEMBER - 1, sum, 2);
  },
};
arg5.TIMEZONE_ABBR_MAP = {
  ACDT: 630,
  ACST: 570,
  ADT: -180,
  AEDT: 660,
  AEST: 600,
  AFT: 270,
  AKDT: -480,
  AKST: -540,
  ALMT: 360,
  AMST: -180,
  AMT: -240,
  ANAST: 720,
  ANAT: 720,
  AQTT: 300,
  ART: -180,
  AST: -240,
  AWDT: 540,
  AWST: 480,
  AZOST: 0,
  AZOT: -60,
  AZST: 300,
  AZT: 240,
  BNT: 480,
  BOT: -240,
  BRST: -120,
  BRT: -180,
  BST: 60,
  BTT: 360,
  CAST: 480,
  CAT: 120,
  CCT: 390,
  CDT: -300,
  CEST: 120,
  CET: obj,
  CHADT: 825,
  CHAST: 765,
  CKT: -600,
  CLST: -180,
  CLT: -240,
  COT: -300,
  CST: -360,
  CT: obj,
  CVT: -60,
  CXT: 420,
  ChST: 600,
  DAVT: 420,
  EASST: -300,
  EAST: -360,
  EAT: 180,
  ECT: -300,
  EDT: -240,
  EEST: 180,
  EET: 120,
  EGST: 0,
  EGT: -60,
  EST: -300,
  ET: obj,
  FJST: 780,
  FJT: 720,
  FKST: -180,
  FKT: -240,
  FNT: -120,
  GALT: -360,
  GAMT: -540,
  GET: 240,
  GFT: -180,
  GILT: 720,
  GMT: 0,
  GST: 240,
  GYT: -240,
  HAA: -180,
  HAC: -300,
  HADT: -540,
  HAE: -240,
  HAP: -420,
  HAR: -360,
  HAST: -600,
  HAT: -90,
  HAY: -480,
  HKT: 480,
  HLV: -210,
  HNA: -240,
  HNC: -360,
  HNE: -300,
  HNP: -480,
  HNR: -420,
  HNT: -150,
  HNY: -540,
  HOVT: 420,
  ICT: 420,
  IDT: 180,
  IOT: 360,
  IRDT: 270,
  IRKST: 540,
  IRKT: 540,
  IRST: 210,
  IST: 330,
  JST: 540,
  KGT: 360,
  KRAST: 480,
  KRAT: 480,
  KST: 540,
  KUYT: 240,
  LHDT: 660,
  LHST: 630,
  LINT: 840,
  MAGST: 720,
  MAGT: 720,
  MART: -510,
  MAWT: 300,
  MDT: -360,
  MESZ: 120,
  MEZ: 60,
  MHT: 720,
  MMT: 390,
  MSD: 240,
  MSK: 180,
  MST: -420,
  MT: {
    timezoneOffsetDuringDst: -360,
    timezoneOffsetNonDst: -420,
    dstStart(arg0) {
      let sum;
      let sum1;
      const MARCH = _mod10455.Month.MARCH;
      let num = 0;
      let num2 = 0;
      do {
        sum = num2 + 1;
        let _Date = Date;
        let tmp3 = new.target;
        let tmp4 = new.target;
        let tmp5 = arg0;
        let tmp6 = sum;
        let date = new Date(arg0, MARCH - 1, sum);
        let tmp7 = date;
        let tmp8 = num;
        sum1 = num;
        if (date.getDay() === tmp) {
          sum1 = num + 1;
        }
        num = sum1;
        num2 = sum;
      } while (sum1 < 2);
      return new Date(arg0, MARCH - 1, sum, 2);
    },
    dstEnd(arg0) {
      let sum;
      let sum1;
      const NOVEMBER = _mod10455.Month.NOVEMBER;
      let num = 0;
      let num2 = 0;
      do {
        sum = num2 + 1;
        let _Date = Date;
        let tmp3 = new.target;
        let tmp4 = new.target;
        let tmp5 = arg0;
        let tmp6 = sum;
        let date = new Date(arg0, NOVEMBER - 1, sum);
        let tmp7 = date;
        let tmp8 = num;
        sum1 = num;
        if (date.getDay() === tmp) {
          sum1 = num + 1;
        }
        num = sum1;
        num2 = sum;
      } while (sum1 < 1);
      return new Date(arg0, NOVEMBER - 1, sum, 2);
    },
  },
  MUT: 240,
  MVT: 300,
  MYT: 480,
  NCT: 660,
  NDT: -90,
  NFT: 690,
  NOVST: 420,
  NOVT: 360,
  NPT: 345,
  NST: -150,
  NUT: -660,
  NZDT: 780,
  NZST: 720,
  OMSST: 420,
  OMST: 420,
  PDT: -420,
  PET: -300,
  PETST: 720,
  PETT: 720,
  PGT: 600,
  PHOT: 780,
  PHT: 480,
  PKT: 300,
  PMDT: -120,
  PMST: -180,
  PONT: 660,
  PST: -480,
  PT: {
    timezoneOffsetDuringDst: -420,
    timezoneOffsetNonDst: -480,
    dstStart(arg0) {
      let sum;
      let sum1;
      const MARCH = _mod10455.Month.MARCH;
      let num = 0;
      let num2 = 0;
      do {
        sum = num2 + 1;
        let _Date = Date;
        let tmp3 = new.target;
        let tmp4 = new.target;
        let tmp5 = arg0;
        let tmp6 = sum;
        let date = new Date(arg0, MARCH - 1, sum);
        let tmp7 = date;
        let tmp8 = num;
        sum1 = num;
        if (date.getDay() === tmp) {
          sum1 = num + 1;
        }
        num = sum1;
        num2 = sum;
      } while (sum1 < 2);
      return new Date(arg0, MARCH - 1, sum, 2);
    },
    dstEnd(arg0) {
      let sum;
      let sum1;
      const NOVEMBER = _mod10455.Month.NOVEMBER;
      let num = 0;
      let num2 = 0;
      do {
        sum = num2 + 1;
        let _Date = Date;
        let tmp3 = new.target;
        let tmp4 = new.target;
        let tmp5 = arg0;
        let tmp6 = sum;
        let date = new Date(arg0, NOVEMBER - 1, sum);
        let tmp7 = date;
        let tmp8 = num;
        sum1 = num;
        if (date.getDay() === tmp) {
          sum1 = num + 1;
        }
        num = sum1;
        num2 = sum;
      } while (sum1 < 1);
      return new Date(arg0, NOVEMBER - 1, sum, 2);
    },
  },
  PWT: 540,
  PYST: -180,
  PYT: -240,
  RET: 240,
  SAMT: 240,
  SAST: 120,
  SBT: 660,
  SCT: 240,
  SGT: 480,
  SRT: -180,
  SST: -660,
  TAHT: -600,
  TFT: 300,
  TJT: 300,
  TKT: 780,
  TLT: 540,
  TMT: 300,
  TVT: 720,
  ULAT: 480,
  UTC: 0,
  UYST: -120,
  UYT: -180,
  UZT: 300,
  VET: -210,
  VLAST: 660,
  VLAT: 660,
  VUT: 660,
  WAST: 120,
  WAT: 60,
  WEST: 60,
  WESZ: 60,
  WET: 0,
  WEZ: 0,
  WFT: 720,
  WGST: -120,
  WGT: -180,
  WIB: 420,
  WIT: 540,
  WITA: 480,
  WST: 780,
  WT: 0,
  YAKST: 600,
  YAKT: 600,
  YAPT: 600,
  YEKST: 360,
  YEKT: 360,
};
