// discord_app/modules/go_live/StreamSettingsConstants.tsx
import { BoostedGuildTiers } from "ME";
import { StreamQualities } from "GuildFeatures";

let FPS_602 = require;
let f30890 = dependencyMap;
let obj = { RESOLUTION_480: 480, [480]: "RESOLUTION_480", RESOLUTION_720: 720, [720]: "RESOLUTION_720", RESOLUTION_1080: 1080, [1080]: "RESOLUTION_1080", RESOLUTION_1440: 1440, [1440]: "RESOLUTION_1440", RESOLUTION_SOURCE: 0, [0]: "RESOLUTION_SOURCE" };
obj = { FPS_5: 5, [5]: "FPS_5", FPS_15: 15, [15]: "FPS_15", FPS_30: 30, [30]: "FPS_30", FPS_60: 60, [60]: "FPS_60" };
obj = { PRESET_VIDEO: 1, [1]: "PRESET_VIDEO", PRESET_DOCUMENTS: 2, [2]: "PRESET_DOCUMENTS", PRESET_CUSTOM: 3, [3]: "PRESET_CUSTOM", PRESET_AUTO: 4, [4]: "PRESET_AUTO", PRESET_MOBILE_DEFAULT: 5, [5]: "PRESET_MOBILE_DEFAULT", PRESET_MOBILE_PERFORMANCE: 6, [6]: "PRESET_MOBILE_PERFORMANCE", PRESET_MOBILE_HIGH_QUALITY: 7, [7]: "PRESET_MOBILE_HIGH_QUALITY" };
const items = [{ resolution: obj.RESOLUTION_SOURCE, fps: obj.FPS_60, quality: StreamQualities.HIGH_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_SOURCE, fps: obj.FPS_30, quality: StreamQualities.HIGH_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_SOURCE, fps: obj.FPS_15, quality: StreamQualities.HIGH_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_SOURCE, fps: obj.FPS_5, preset: obj.PRESET_DOCUMENTS }, { resolution: obj.RESOLUTION_1440, fps: obj.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_1440, fps: obj.FPS_30, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_1440, fps: obj.FPS_15, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_1080, fps: obj.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_1080, fps: obj.FPS_30, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_1080, fps: obj.FPS_15, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_720, fps: obj.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_1, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_720, fps: obj.FPS_30 }, { resolution: obj.RESOLUTION_720, fps: obj.FPS_15 }, { resolution: obj.RESOLUTION_720, fps: obj.FPS_5 }, { resolution: obj.RESOLUTION_480, fps: obj.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_1, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_480, fps: obj.FPS_30 }, { resolution: obj.RESOLUTION_480, fps: obj.FPS_15 }, { resolution: obj.RESOLUTION_480, fps: obj.FPS_5 }];
let RESOLUTION_720 = obj.RESOLUTION_720;
FPS_602 = RESOLUTION_720;
f30890 = undefined;
const obj2 = { value: RESOLUTION_720 };
Object.defineProperty(obj2, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj2, "subtext", {
  get: () => {

  },
  set: undefined
});
const items1 = [obj2, , , ];
let RESOLUTION_1080 = obj.RESOLUTION_1080;
FPS_602 = RESOLUTION_1080;
f30890 = undefined;
const obj3 = { value: RESOLUTION_1080 };
Object.defineProperty(obj3, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj3, "subtext", {
  get: () => {

  },
  set: undefined
});
items1[1] = obj3;
let RESOLUTION_1440 = obj.RESOLUTION_1440;
FPS_602 = RESOLUTION_1440;
f30890 = undefined;
const obj4 = { value: RESOLUTION_1440 };
Object.defineProperty(obj4, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj4, "subtext", {
  get: () => {

  },
  set: undefined
});
items1[2] = obj4;
let RESOLUTION_SOURCE = obj.RESOLUTION_SOURCE;
FPS_602 = RESOLUTION_SOURCE;
f30890 = () => {
  const intl = FPS_602(f30890[2]).intl;
  return intl.string(FPS_602(f30890[2]).t.XjXqzh);
};
const obj5 = { value: RESOLUTION_SOURCE };
Object.defineProperty(obj5, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj5, "subtext", {
  get: () => {

  },
  set: undefined
});
items1[3] = obj5;
const RESOLUTION_7202 = obj.RESOLUTION_720;
FPS_602 = RESOLUTION_7202;
f30890 = undefined;
const obj6 = { value: RESOLUTION_7202 };
Object.defineProperty(obj6, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj6, "subtext", {
  get: () => {

  },
  set: undefined
});
const items2 = [obj6, , ];
const RESOLUTION_10802 = obj.RESOLUTION_1080;
FPS_602 = RESOLUTION_10802;
f30890 = undefined;
const obj7 = { value: RESOLUTION_10802 };
Object.defineProperty(obj7, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj7, "subtext", {
  get: () => {

  },
  set: undefined
});
items2[1] = obj7;
const RESOLUTION_14402 = obj.RESOLUTION_1440;
FPS_602 = RESOLUTION_14402;
f30890 = undefined;
const obj8 = { value: RESOLUTION_14402 };
Object.defineProperty(obj8, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj8, "subtext", {
  get: () => {

  },
  set: undefined
});
items2[2] = obj8;
let RESOLUTION_480 = obj.RESOLUTION_480;
FPS_602 = RESOLUTION_480;
f30890 = () => {
  const RESOLUTION_480 = obj.RESOLUTION_480;
  if (RESOLUTION_480 === obj.RESOLUTION_SOURCE) {
    const intl2 = FPS_602(f30890[2]).intl;
    let stringResult = intl2.string(FPS_602(f30890[2]).t.XjXqzh);
  } else {
    const intl = FPS_602(f30890[2]).intl;
    obj = { resolution: null };
    obj[0] = RESOLUTION_480;
    stringResult = intl.formatToPlainString(FPS_602(f30890[2]).t.TEOC0I, obj);
  }
  return stringResult;
};
const obj9 = { value: RESOLUTION_480 };
Object.defineProperty(obj9, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj9, "subtext", {
  get: () => {

  },
  set: undefined
});
const items3 = [obj9, , , , ];
const RESOLUTION_7203 = obj.RESOLUTION_720;
FPS_602 = RESOLUTION_7203;
f30890 = () => {
  const RESOLUTION_720 = obj.RESOLUTION_720;
  if (RESOLUTION_720 === obj.RESOLUTION_SOURCE) {
    const intl2 = FPS_602(f30890[2]).intl;
    let stringResult = intl2.string(FPS_602(f30890[2]).t.XjXqzh);
  } else {
    const intl = FPS_602(f30890[2]).intl;
    obj = { resolution: null };
    obj[0] = RESOLUTION_720;
    stringResult = intl.formatToPlainString(FPS_602(f30890[2]).t.TEOC0I, obj);
  }
  return stringResult;
};
const obj10 = { value: RESOLUTION_7203 };
Object.defineProperty(obj10, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj10, "subtext", {
  get: () => {

  },
  set: undefined
});
items3[1] = obj10;
const RESOLUTION_10803 = obj.RESOLUTION_1080;
FPS_602 = RESOLUTION_10803;
f30890 = () => {
  const RESOLUTION_1080 = obj.RESOLUTION_1080;
  if (RESOLUTION_1080 === obj.RESOLUTION_SOURCE) {
    const intl2 = FPS_602(f30890[2]).intl;
    let stringResult = intl2.string(FPS_602(f30890[2]).t.XjXqzh);
  } else {
    const intl = FPS_602(f30890[2]).intl;
    obj = { resolution: null };
    obj[0] = RESOLUTION_1080;
    stringResult = intl.formatToPlainString(FPS_602(f30890[2]).t.TEOC0I, obj);
  }
  return stringResult;
};
const obj11 = { value: RESOLUTION_10803 };
Object.defineProperty(obj11, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj11, "subtext", {
  get: () => {

  },
  set: undefined
});
items3[2] = obj11;
const RESOLUTION_14403 = obj.RESOLUTION_1440;
FPS_602 = RESOLUTION_14403;
f30890 = () => {
  const RESOLUTION_1440 = obj.RESOLUTION_1440;
  if (RESOLUTION_1440 === obj.RESOLUTION_SOURCE) {
    const intl2 = FPS_602(f30890[2]).intl;
    let stringResult = intl2.string(FPS_602(f30890[2]).t.XjXqzh);
  } else {
    const intl = FPS_602(f30890[2]).intl;
    obj = { resolution: null };
    obj[0] = RESOLUTION_1440;
    stringResult = intl.formatToPlainString(FPS_602(f30890[2]).t.TEOC0I, obj);
  }
  return stringResult;
};
const obj12 = { value: RESOLUTION_14403 };
Object.defineProperty(obj12, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj12, "subtext", {
  get: () => {

  },
  set: undefined
});
items3[3] = obj12;
const RESOLUTION_SOURCE2 = obj.RESOLUTION_SOURCE;
FPS_602 = RESOLUTION_SOURCE2;
f30890 = () => {
  const RESOLUTION_SOURCE = obj.RESOLUTION_SOURCE;
  if (RESOLUTION_SOURCE === obj.RESOLUTION_SOURCE) {
    const intl2 = FPS_602(f30890[2]).intl;
    let stringResult = intl2.string(FPS_602(f30890[2]).t.XjXqzh);
  } else {
    const intl = FPS_602(f30890[2]).intl;
    obj = { resolution: null };
    obj[0] = RESOLUTION_SOURCE;
    stringResult = intl.formatToPlainString(FPS_602(f30890[2]).t.TEOC0I, obj);
  }
  return stringResult;
};
const obj13 = { value: RESOLUTION_SOURCE2 };
Object.defineProperty(obj13, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj13, "subtext", {
  get: () => {

  },
  set: undefined
});
items3[4] = obj13;
const FPS_15 = obj.FPS_15;
FPS_602 = FPS_15;
f30890 = undefined;
const obj14 = { value: FPS_15 };
Object.defineProperty(obj14, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj14, "subtext", {
  get: () => {

  },
  set: undefined
});
const items4 = [obj14, , ];
const FPS_30 = obj.FPS_30;
FPS_602 = FPS_30;
f30890 = undefined;
const obj15 = { value: FPS_30 };
Object.defineProperty(obj15, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj15, "subtext", {
  get: () => {

  },
  set: undefined
});
items4[1] = obj15;
const FPS_60 = obj.FPS_60;
FPS_602 = FPS_60;
f30890 = undefined;
const obj16 = { value: FPS_60 };
Object.defineProperty(obj16, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj16, "subtext", {
  get: () => {

  },
  set: undefined
});
items4[2] = obj16;
const FPS_152 = obj.FPS_15;
FPS_602 = FPS_152;
f30890 = () => {
  const intl = FPS_602(f30890[2]).intl;
  obj = { value: obj.FPS_15 };
  return intl.formatToPlainString(FPS_602(f30890[2]).t["bW+JCW"], obj);
};
const obj17 = { value: FPS_152 };
Object.defineProperty(obj17, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj17, "subtext", {
  get: () => {

  },
  set: undefined
});
const items5 = [obj17, , ];
const FPS_302 = obj.FPS_30;
FPS_602 = FPS_302;
f30890 = () => {
  const intl = FPS_602(f30890[2]).intl;
  obj = { value: obj.FPS_30 };
  return intl.formatToPlainString(FPS_602(f30890[2]).t["bW+JCW"], obj);
};
const obj18 = { value: FPS_302 };
Object.defineProperty(obj18, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj18, "subtext", {
  get: () => {

  },
  set: undefined
});
items5[1] = obj18;
FPS_602 = obj.FPS_60;
f30890 = () => {
  const intl = FPS_602(f30890[2]).intl;
  obj = { value: obj.FPS_60 };
  return intl.formatToPlainString(FPS_602(f30890[2]).t["bW+JCW"], obj);
};
const obj19 = { value: FPS_602 };
Object.defineProperty(obj19, "label", {
  get: () => {
    if (null != f30890) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(FPS_602);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj19, "subtext", {
  get: () => {

  },
  set: undefined
});
items5[2] = obj19;
const result = require("getSystemLocale").fileFinishedImporting("modules/go_live/StreamSettingsConstants.tsx");

export const ApplicationStreamResolutions = obj;
export const getApplicationResolution = function getApplicationResolution(arg0) {
  if (obj.RESOLUTION_480 === arg0) {
    return tmp.RESOLUTION_480;
  } else if (tmp.RESOLUTION_720 === arg0) {
    return tmp.RESOLUTION_720;
  } else if (tmp.RESOLUTION_1080 === arg0) {
    return tmp.RESOLUTION_1080;
  } else if (tmp.RESOLUTION_1440 === arg0) {
    return tmp.RESOLUTION_1440;
  } else if (tmp.RESOLUTION_SOURCE === arg0) {
    return tmp.RESOLUTION_SOURCE;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown resolution: " + arg0);
    throw error;
  }
};
export const ApplicationStreamFPS = obj;
export const ApplicationStreamPresets = obj;
export const getApplicationFramerate = function getApplicationFramerate(arg0) {
  if (obj.FPS_5 === arg0) {
    return tmp.FPS_5;
  } else if (tmp.FPS_15 === arg0) {
    return tmp.FPS_15;
  } else if (tmp.FPS_30 === arg0) {
    return tmp.FPS_30;
  } else if (tmp.FPS_60 === arg0) {
    return tmp.FPS_60;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown frame rate: " + arg0);
    throw error;
  }
};
export const ApplicationStreamSettingRequirements = items;
export const ApplicationStreamResolutionButtons = items1;
export const GoLiveDeviceResolutionButtons = items2;
export const makeResolutionLabel = function makeResolutionLabel(arg0) {
  if (arg0 === obj.RESOLUTION_SOURCE) {
    const intl2 = FPS_602(f30890[2]).intl;
    let stringResult = intl2.string(FPS_602(f30890[2]).t.XjXqzh);
  } else {
    const intl = FPS_602(f30890[2]).intl;
    obj = { resolution: null };
    obj[0] = arg0;
    stringResult = intl.formatToPlainString(FPS_602(f30890[2]).t.TEOC0I, obj);
  }
  return stringResult;
};
export const ApplicationStreamResolutionButtonsWithSuffixLabel = items3;
export const ApplicationStreamFPSButtons = items4;
export const ApplicationStreamFPSButtonsWithSuffixLabel = items5;