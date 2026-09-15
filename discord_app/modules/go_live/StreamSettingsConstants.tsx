// === Module 4686: StreamSettingsConstants ===

// Module 4686 (StreamSettingsConstants)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

const BoostedGuildTiers = Constants.BoostedGuildTiers;
const StreamQualities = PremiumConstants.StreamQualities;
const ApplicationStreamResolutions = { RESOLUTION_480: 480, [480]: "RESOLUTION_480", RESOLUTION_720: 720, [720]: "RESOLUTION_720", RESOLUTION_1080: 1080, [1080]: "RESOLUTION_1080", RESOLUTION_1440: 1440, [1440]: "RESOLUTION_1440", RESOLUTION_SOURCE: 0, [0]: "RESOLUTION_SOURCE" };
const obj2 = { FPS_5: 5, [5]: "FPS_5", FPS_15: 15, [15]: "FPS_15", FPS_30: 30, [30]: "FPS_30", FPS_60: 60, [60]: "FPS_60" };
const obj3 = { PRESET_VIDEO: 1, [1]: "PRESET_VIDEO", PRESET_DOCUMENTS: 2, [2]: "PRESET_DOCUMENTS", PRESET_CUSTOM: 3, [3]: "PRESET_CUSTOM", PRESET_AUTO: 4, [4]: "PRESET_AUTO", PRESET_MOBILE_DEFAULT: 5, [5]: "PRESET_MOBILE_DEFAULT", PRESET_MOBILE_PERFORMANCE: 6, [6]: "PRESET_MOBILE_PERFORMANCE", PRESET_MOBILE_HIGH_QUALITY: 7, [7]: "PRESET_MOBILE_HIGH_QUALITY" };
const items = [{ resolution: ApplicationStreamResolutions.RESOLUTION_SOURCE, fps: obj2.FPS_60, quality: StreamQualities.HIGH_STREAMING_QUALITY }, { resolution: ApplicationStreamResolutions.RESOLUTION_SOURCE, fps: obj2.FPS_30, quality: StreamQualities.HIGH_STREAMING_QUALITY }, { resolution: ApplicationStreamResolutions.RESOLUTION_SOURCE, fps: obj2.FPS_15, quality: StreamQualities.HIGH_STREAMING_QUALITY }, { resolution: ApplicationStreamResolutions.RESOLUTION_SOURCE, fps: obj2.FPS_5, preset: obj3.PRESET_DOCUMENTS }, { resolution: ApplicationStreamResolutions.RESOLUTION_1440, fps: obj2.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: ApplicationStreamResolutions.RESOLUTION_1440, fps: obj2.FPS_30, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: ApplicationStreamResolutions.RESOLUTION_1440, fps: obj2.FPS_15, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: ApplicationStreamResolutions.RESOLUTION_1080, fps: obj2.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: ApplicationStreamResolutions.RESOLUTION_1080, fps: obj2.FPS_30, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: ApplicationStreamResolutions.RESOLUTION_1080, fps: obj2.FPS_15, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: ApplicationStreamResolutions.RESOLUTION_720, fps: obj2.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_1, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: ApplicationStreamResolutions.RESOLUTION_720, fps: obj2.FPS_30 }, { resolution: ApplicationStreamResolutions.RESOLUTION_720, fps: obj2.FPS_15 }, { resolution: ApplicationStreamResolutions.RESOLUTION_720, fps: obj2.FPS_5 }, { resolution: ApplicationStreamResolutions.RESOLUTION_480, fps: obj2.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_1, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: ApplicationStreamResolutions.RESOLUTION_480, fps: obj2.FPS_30 }, { resolution: ApplicationStreamResolutions.RESOLUTION_480, fps: obj2.FPS_15 }, { resolution: ApplicationStreamResolutions.RESOLUTION_480, fps: obj2.FPS_5 }];
let RESOLUTION_720 = ApplicationStreamResolutions.RESOLUTION_720;
let closure_129_0 = RESOLUTION_720;
let closure_129_1;
const obj5 = { value: RESOLUTION_720 };
Object.defineProperty(obj5, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
const items1 = [obj5, , , ];
let RESOLUTION_1080 = ApplicationStreamResolutions.RESOLUTION_1080;
let closure_130_0 = RESOLUTION_1080;
let closure_130_1;
const obj6 = { value: RESOLUTION_1080 };
Object.defineProperty(obj6, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
items1[1] = obj6;
let RESOLUTION_1440 = ApplicationStreamResolutions.RESOLUTION_1440;
let closure_131_0 = RESOLUTION_1440;
let closure_131_1;
const obj7 = { value: RESOLUTION_1440 };
Object.defineProperty(obj7, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
items1[2] = obj7;
let RESOLUTION_SOURCE = ApplicationStreamResolutions.RESOLUTION_SOURCE;
let closure_132_0 = RESOLUTION_SOURCE;
let closure_132_1 = () => {
  const intl = util.intl;
  return intl.string(util.t.XjXqzh);
};
const obj8 = { value: RESOLUTION_SOURCE };
Object.defineProperty(obj8, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
items1[3] = obj8;
const RESOLUTION_7202 = ApplicationStreamResolutions.RESOLUTION_720;
let closure_133_0 = RESOLUTION_7202;
let closure_133_1;
const obj9 = { value: RESOLUTION_7202 };
Object.defineProperty(obj9, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
const items2 = [obj9, , ];
const RESOLUTION_10802 = ApplicationStreamResolutions.RESOLUTION_1080;
let closure_134_0 = RESOLUTION_10802;
let closure_134_1;
const obj10 = { value: RESOLUTION_10802 };
Object.defineProperty(obj10, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
items2[1] = obj10;
const RESOLUTION_14402 = ApplicationStreamResolutions.RESOLUTION_1440;
let closure_135_0 = RESOLUTION_14402;
let closure_135_1;
const obj11 = { value: RESOLUTION_14402 };
Object.defineProperty(obj11, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
items2[2] = obj11;
let RESOLUTION_480 = ApplicationStreamResolutions.RESOLUTION_480;
let closure_136_0 = RESOLUTION_480;
let closure_136_1 = () => {
  const RESOLUTION_480 = obj.RESOLUTION_480;
  if (RESOLUTION_480 === obj.RESOLUTION_SOURCE) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.XjXqzh);
  } else {
    const intl = util.intl;
    obj = { resolution: RESOLUTION_480 };
    stringResult = intl.formatToPlainString(util.t.TEOC0I, obj);
  }
  return stringResult;
};
const obj12 = { value: RESOLUTION_480 };
Object.defineProperty(obj12, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
const items3 = [obj12, , , , ];
const RESOLUTION_7203 = ApplicationStreamResolutions.RESOLUTION_720;
let closure_137_0 = RESOLUTION_7203;
let closure_137_1 = () => {
  const RESOLUTION_720 = obj.RESOLUTION_720;
  if (RESOLUTION_720 === obj.RESOLUTION_SOURCE) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.XjXqzh);
  } else {
    const intl = util.intl;
    obj = { resolution: RESOLUTION_720 };
    stringResult = intl.formatToPlainString(util.t.TEOC0I, obj);
  }
  return stringResult;
};
const obj13 = { value: RESOLUTION_7203 };
Object.defineProperty(obj13, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
items3[1] = obj13;
const RESOLUTION_10803 = ApplicationStreamResolutions.RESOLUTION_1080;
let closure_138_0 = RESOLUTION_10803;
let closure_138_1 = () => {
  const RESOLUTION_1080 = obj.RESOLUTION_1080;
  if (RESOLUTION_1080 === obj.RESOLUTION_SOURCE) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.XjXqzh);
  } else {
    const intl = util.intl;
    obj = { resolution: RESOLUTION_1080 };
    stringResult = intl.formatToPlainString(util.t.TEOC0I, obj);
  }
  return stringResult;
};
const obj14 = { value: RESOLUTION_10803 };
Object.defineProperty(obj14, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
items3[2] = obj14;
const RESOLUTION_14403 = ApplicationStreamResolutions.RESOLUTION_1440;
let closure_139_0 = RESOLUTION_14403;
let closure_139_1 = () => {
  const RESOLUTION_1440 = obj.RESOLUTION_1440;
  if (RESOLUTION_1440 === obj.RESOLUTION_SOURCE) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.XjXqzh);
  } else {
    const intl = util.intl;
    obj = { resolution: RESOLUTION_1440 };
    stringResult = intl.formatToPlainString(util.t.TEOC0I, obj);
  }
  return stringResult;
};
const obj15 = { value: RESOLUTION_14403 };
Object.defineProperty(obj15, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
items3[3] = obj15;
const RESOLUTION_SOURCE2 = ApplicationStreamResolutions.RESOLUTION_SOURCE;
let closure_140_0 = RESOLUTION_SOURCE2;
let closure_140_1 = () => {
  const RESOLUTION_SOURCE = obj.RESOLUTION_SOURCE;
  if (RESOLUTION_SOURCE === obj.RESOLUTION_SOURCE) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.XjXqzh);
  } else {
    const intl = util.intl;
    obj = { resolution: RESOLUTION_SOURCE };
    stringResult = intl.formatToPlainString(util.t.TEOC0I, obj);
  }
  return stringResult;
};
const obj16 = { value: RESOLUTION_SOURCE2 };
Object.defineProperty(obj16, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
items3[4] = obj16;
const FPS_15 = obj2.FPS_15;
let closure_141_0 = FPS_15;
let closure_141_1;
const obj17 = { value: FPS_15 };
Object.defineProperty(obj17, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
const items4 = [obj17, , ];
const FPS_30 = obj2.FPS_30;
let closure_142_0 = FPS_30;
let closure_142_1;
const obj18 = { value: FPS_30 };
Object.defineProperty(obj18, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
items4[1] = obj18;
const FPS_60 = obj2.FPS_60;
let closure_143_0 = FPS_60;
let closure_143_1;
const obj19 = { value: FPS_60 };
Object.defineProperty(obj19, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
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
items4[2] = obj19;
const FPS_152 = obj2.FPS_15;
let closure_144_0 = FPS_152;
let closure_144_1 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t["bW+JCW"], { value: obj2.FPS_15 });
};
const obj20 = { value: FPS_152 };
Object.defineProperty(obj20, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj20, "subtext", {
  get: () => {

  },
  set: undefined
});
const items5 = [obj20, , ];
const FPS_302 = obj2.FPS_30;
let closure_145_0 = FPS_302;
let closure_145_1 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t["bW+JCW"], { value: obj2.FPS_30 });
};
const obj21 = { value: FPS_302 };
Object.defineProperty(obj21, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj21, "subtext", {
  get: () => {

  },
  set: undefined
});
items5[1] = obj21;
const FPS_602 = obj2.FPS_60;
let closure_146_0 = FPS_602;
let closure_146_1 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t["bW+JCW"], { value: obj2.FPS_60 });
};
const obj22 = { value: FPS_602 };
Object.defineProperty(obj22, "label", {
  get: () => {
    if (null != dependencyMap) {
      let StringResult = tmp();
    } else {
      const _String = String;
      StringResult = String(require);
    }
    return StringResult;
  },
  set: undefined
});
Object.defineProperty(obj22, "subtext", {
  get: () => {

  },
  set: undefined
});
items5[2] = obj22;
const result = size.fileFinishedImporting("modules/go_live/StreamSettingsConstants.tsx");

export { ApplicationStreamResolutions };
export const getApplicationResolution = function getApplicationResolution(arg0) {
  if (obj.RESOLUTION_480 === arg0) {
    return obj.RESOLUTION_480;
  } else if (obj.RESOLUTION_720 === arg0) {
    return obj.RESOLUTION_720;
  } else if (obj.RESOLUTION_1080 === arg0) {
    return obj.RESOLUTION_1080;
  } else if (obj.RESOLUTION_1440 === arg0) {
    return obj.RESOLUTION_1440;
  } else if (obj.RESOLUTION_SOURCE === arg0) {
    return obj.RESOLUTION_SOURCE;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown resolution: " + arg0);
    throw error;
  }
};
export const ApplicationStreamFPS = obj2;
export const ApplicationStreamPresets = obj3;
export const getApplicationFramerate = function getApplicationFramerate(arg0) {
  if (obj2.FPS_5 === arg0) {
    return obj2.FPS_5;
  } else if (obj2.FPS_15 === arg0) {
    return obj2.FPS_15;
  } else if (obj2.FPS_30 === arg0) {
    return obj2.FPS_30;
  } else if (obj2.FPS_60 === arg0) {
    return obj2.FPS_60;
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
export const makeResolutionLabel = function makeResolutionLabel(resolution) {
  if (resolution === obj.RESOLUTION_SOURCE) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.XjXqzh);
  } else {
    const intl = util.intl;
    obj = { resolution };
    stringResult = intl.formatToPlainString(util.t.TEOC0I, obj);
  }
  return stringResult;
};
export const ApplicationStreamResolutionButtonsWithSuffixLabel = items3;
export const ApplicationStreamFPSButtons = items4;
export const ApplicationStreamFPSButtonsWithSuffixLabel = items5;