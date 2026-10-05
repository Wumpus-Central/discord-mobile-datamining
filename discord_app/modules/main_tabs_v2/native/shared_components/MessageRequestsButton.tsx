// === Module 15955: MessageRequestsButton ===

// Module 15955 (MessageRequestsButton)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef4816 from "module_4816" /* 4816 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import IconButton from "IconButton" /* 7575 */;
import IconActionButton from "IconActionButton" /* 13097 */;
import _mod15956 from "module_15956" /* 15956 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import MessageRequestStore from "MessageRequestStore" /* 6720 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6721 */;

const IconActionButtonDefault = IconActionButton;

require = fn;
let closure_3 = ["alternateVariant"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let closure_11 = createStyles.createStyles({ buttonContainer: { position: "relative" } });
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageRequestStore];
    const fn = function n() {
      return messageRequestsCount.getMessageRequestsCount();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SpamMessageRequestStore];
    const fn2 = function c() {
      return spamChannelsCount.getSpamChannelsCount();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === stateFromStores1) {
      let tmp12 = cResult[6];
    }
    return tmp12;
  }
  const obj2 = { requestCount: stateFromStores, spamCount: stateFromStores1 };
  cResult[4] = stateFromStores;
  cResult[5] = stateFromStores1;
  cResult[6] = obj2;
  tmp12 = obj2;
  const tmpResult2 = initialize;
}) : (() => {
  const obj = { requestCount: null, spamCount: null };
  const items = [MessageRequestStore];
  obj.requestCount = initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
  const items1 = [SpamMessageRequestStore];
  obj.spamCount = initialize.useStateFromStores(items1, () => spamChannelsCount.getSpamChannelsCount());
  return obj;
});
ReactCompilerGating = fn(558);
const IconComponent = ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  const cResult = c.c(5);
  color = color.color;
  const requestCount = closure_12().requestCount;
  if (cResult[0] !== requestCount) {
    const fn = function n() {
      if (requestCount > 0) {
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.play();
          }
        }
      }
    };
    const items = [requestCount];
    cResult[0] = requestCount;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[3] !== color) {
    const obj3 = { ref, color, size: "sm", autoPlay: true };
    const tmp10 = options(_mod15956.MessageRequestLottie, obj3);
    cResult[3] = color;
    cResult[4] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((color) => {
  const ref = noop.useRef(null);
  const requestCount = closure_12().requestCount;
  const items = [requestCount];
  const effect = noop.useEffect(() => {
    if (requestCount > 0) {
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }
  }, items);
  return options(_mod15956.MessageRequestLottie, { ref, color: color.color, size: "sm", autoPlay: true });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((alternateVariant) => {
  const cResult = c.c(21);
  if (cResult[0] !== alternateVariant) {
    alternateVariant = alternateVariant.alternateVariant;
    const tmp8 = _objectWithoutProperties(alternateVariant, closure_3);
    cResult[0] = alternateVariant;
    cResult[1] = tmp8;
    cResult[2] = alternateVariant;
    let tmp5 = alternateVariant;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp10 = closure_11();
  const tmp11 = closure_12();
  if (0 === tmp11.requestCount) {
    if (0 === tmp11.spamCount) {
      return null;
    }
  }
  if (tmp9) {
    if (cResult[3] !== str) {
      let str1;
      if (str > 0) {
        str1 = str.toString();
      }
      cResult[3] = str;
      cResult[4] = str1;
      let tmp27 = str1;
    } else {
      tmp27 = cResult[4];
    }
    if (cResult[5] === tmp4) {
      if (cResult[6] === tmp27) {
        if (cResult[8] !== str) {
          let tmp44 = str > 0;
          if (tmp44) {
            tmp44 = options(IconActionButton.ButtonBadge, { badgePosition: "right" });
          }
          cResult[8] = str;
          cResult[9] = tmp44;
          let tmp43 = tmp44;
        } else {
          tmp43 = cResult[9];
        }
        if (cResult[10] === tmp10.buttonContainer) {
          if (cResult[11] === tmp29) {
            if (cResult[12] === tmp43) {
              let tmp46 = cResult[13];
            }
            return tmp46;
          }
        }
        const obj2 = { style: tmp10.buttonContainer, collapsable: false, children: null };
        const items = [cResult[7], tmp43];
        obj2.children = items;
        const tmp49 = v65535(View, obj2);
        cResult[10] = tmp10.buttonContainer;
        cResult[11] = cResult[7];
        cResult[12] = tmp43;
        cResult[13] = tmp49;
        tmp46 = tmp49;
      }
    }
    if (null != tmp27) {
      const obj3 = { icon: options(IconComponent, {}), variant: "secondary", text: tmp27, size: "sm", accessibilityLabel: null };
      const intl3 = util.intl;
      obj3.accessibilityLabel = intl3.string(util.t.e7GWjQ);
      const merged = Object.assign(tmp4);
      let tmp36 = options(components_Button_Button.Button, obj3);
    } else {
      const obj4 = { variant: "secondary", size: "sm", icon: options(IconComponent, {}), accessibilityLabel: null };
      const intl2 = util.intl;
      obj4.accessibilityLabel = intl2.string(util.t.e7GWjQ);
      const merged1 = Object.assign(tmp4);
      tmp36 = options(IconButton.IconButton, obj4);
    }
    cResult[5] = tmp4;
    cResult[6] = tmp27;
    cResult[7] = tmp36;
  } else {
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.e7GWjQ);
      cResult[14] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[14];
    }
    if (cResult[15] !== str) {
      let str3;
      if (str > 0) {
        str3 = str.toString();
      }
      cResult[15] = str;
      cResult[16] = str3;
      let tmp15 = str3;
    } else {
      tmp15 = cResult[16];
    }
    if (cResult[17] === tmp4) {
      if (cResult[18] === tmp15) {
        if (cResult[19] === tmp17) {
          let tmp18 = cResult[20];
        }
        return tmp18;
      }
    }
    const obj5 = { source: _modDef4816, IconComponent, accessibilityLabel: tmp13, buttonText: tmp15, badge: str > 0, badgePosition: "right" };
    const merged2 = Object.assign(tmp4);
    const tmp26 = options(IconActionButtonDefault, obj5);
    cResult[17] = tmp4;
    cResult[18] = tmp15;
    cResult[19] = str > 0;
    cResult[20] = tmp26;
    tmp18 = tmp26;
  }
  tmp9 = undefined !== tmp5 && tmp5;
}) : ((alternateVariant) => {
  let flag = alternateVariant.alternateVariant;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(alternateVariant, Object.assign({ alternateVariant: 0 }));
  const tmp3 = closure_12();
  if (0 === tmp3.requestCount) {
    if (0 === tmp3.spamCount) {
      return null;
    }
  }
  if (flag) {
    let str1;
    if (str > 0) {
      str1 = str.toString();
    }
    const obj2 = { style: tmp2.buttonContainer, collapsable: false, children: null };
    if (null != str1) {
      const obj3 = { icon: options(IconComponent, {}), variant: "secondary", text: str1, size: "sm", accessibilityLabel: null };
      const intl2 = util.intl;
      obj3.accessibilityLabel = intl2.string(util.t.e7GWjQ);
      const merged1 = Object.assign(merged);
      let tmp24 = options(components_Button_Button.Button, obj3);
      let tmp26 = require;
      let tmp27 = options;
    } else {
      tmp27 = options;
      tmp26 = require;
      const obj4 = { variant: "secondary", size: "sm", icon: options(IconComponent, {}), accessibilityLabel: null };
      const intl3 = util.intl;
      obj4.accessibilityLabel = intl3.string(util.t.e7GWjQ);
      const merged2 = Object.assign(merged);
      tmp24 = options(IconButton.IconButton, obj4);
    }
    const items = [tmp24, str > 0 && tmp27(tmp26(13097).ButtonBadge, { badgePosition: "right" })];
    obj2.children = items;
    return v65535(View, obj2);
  } else {
    const obj = { source: _modDef4816, IconComponent, accessibilityLabel: null, buttonText: null, badge: null, badgePosition: "right" };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.e7GWjQ);
    let str2;
    if (str > 0) {
      str2 = str.toString();
    }
    obj.buttonText = str2;
    obj.badge = str > 0;
    const merged3 = Object.assign(merged);
    return options(IconActionButtonDefault, obj);
  }
  tmp2 = closure_11();
});