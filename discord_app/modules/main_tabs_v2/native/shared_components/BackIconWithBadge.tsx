// discord_app/modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import XLargeIcon from "../../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx";
import ArrowLargeLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import ClipView from "../../../../design/components/Icon/native/ClipView.tsx";
import useNotificationsTabBadgeDefault from "../tabs/notifications/useNotificationsTabBadge.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildReadStateStore from "../../../../stores/GuildReadStateStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ClipViewDefault = ClipView;
let _require, count, navigation;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  badgeWrapper: { position: "absolute", top: 16, left: 12 },
  backIcon: { height: 24, width: 24 },
  iconWithBadge: obj2,
};
obj2 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
  padding: 7,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
};
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let BADGE_SIZE;
      let Icon;
      let includeNotificationsCount;
      let items3;
      let obj3;
      let tmp14;
      let tmp15;
      let tmp6;
      let tmp7;
      let totalMentionCount;
      const obj = react2;
      const cResult = obj.c(20);
      ({ includeNotificationsCount, Icon } = arg0);
      const tmp4 = undefined !== includeNotificationsCount && includeNotificationsCount;
      const tmp5 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildReadStateStore];
        class I {
          constructor() {
            return closure_1_5.getTotalMentionCount();
          }
        }
        cResult[0] = items;
        cResult[1] = I;
        tmp6 = items;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp6, I);
      let num3 = 0;
      const value = useNotificationsTabBadgeDefault().value;
      if (null != stateFromStores) {
        num3 = stateFromStores;
      }
      let num4 = 0;
      if (tmp4) {
        num4 = value;
      }
      const sum = num3 + num4;
      if (sum < 10) {
        BADGE_SIZE = native.BADGE_SIZE;
      } else {
        BADGE_SIZE = native.BADGE_SIZE + 8;
      }
      if (0 !== sum) {
        const sum1 = BADGE_SIZE + 2 * native.BADGE_PADDING;
        if (cResult[2] !== sum1) {
          size = {
            shape: ClipView.CutoutShape.RoundedRect,
            x: null,
            y: 16 - native.BADGE_PADDING,
            width: sum1,
            height: native.BADGE_SIZE + 2 * native.BADGE_PADDING,
            cornerRadius: (native.BADGE_SIZE + 2 * native.BADGE_PADDING) / 2,
          };
          class I {
            constructor() {
              return closure_1_5.getTotalMentionCount();
            }
          }
          cResult[2] = sum1;
          cResult[3] = size;
        }
        class I {
          constructor() {
            return closure_1_5.getTotalMentionCount();
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        let size1;
        const tmpResult2 = utils_PlatformUtils;
        if (tmpResult2.isAndroid()) {
          size1 = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
        }
        class I {
          constructor() {
            return closure_1_5.getTotalMentionCount();
          }
        }
        cResult[4] = size1;
        tmp14 = size1;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] !== undefined) {
        let items2;
        if (null != undefined) {
          const items1 = [undefined];
          items2 = items1;
        } else {
          items2 = [];
        }
        cResult[5] = undefined;
        class I {
          constructor() {
            return closure_1_5.getTotalMentionCount();
          }
        }
        cResult[6] = items2;
        tmp15 = items2;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === Icon) {
        let tmp16;
        if (cResult[8] === tmp5.backIcon) {
          tmp16 = cResult[9];
        }
        if (cResult[10] === tmp15) {
          let tmp18;
          if (cResult[11] === tmp16) {
            tmp18 = cResult[12];
          }
          if (cResult[13] === sum) {
            let tmp22;
            if (cResult[14] === tmp5.badgeWrapper) {
              tmp22 = cResult[15];
            }
            if (cResult[16] === tmp5.backIcon) {
              if (cResult[17] === tmp22) {
                let tmp24;
                if (cResult[18] === tmp18) {
                  tmp24 = cResult[19];
                }
                return tmp24;
              }
            }
            class I {
              constructor() {
                return closure_1_5.getTotalMentionCount();
              }
            }
            const obj2 = { style: tmp14, children: metroImportDefault(View, obj3) };
            obj3 = { style: tmp5.backIcon, children: items3 };
            items3 = [tmp18, tmp22];
            const tmp27 = metroRequire(View, obj2);
            cResult[16] = tmp5.backIcon;
            cResult[17] = tmp22;
            cResult[18] = tmp18;
            cResult[19] = tmp27;
            tmp24 = tmp27;
          }
          class I {
            constructor() {
              return closure_1_5.getTotalMentionCount();
            }
          }
          cResult[13] = sum;
          cResult[14] = tmp5.badgeWrapper;
          cResult[15] = null;
          tmp22 = tmp23;
        }
        class I {
          constructor() {
            return closure_1_5.getTotalMentionCount();
          }
        }
        tmp20[0] = tmp15;
        tmp20[1] = tmp16;
        const tmp21 = metroRequire(ClipViewDefault, tmp20);
        cResult[10] = tmp15;
        cResult[11] = tmp16;
        cResult[12] = tmp21;
        tmp18 = tmp21;
      }
      const obj4 = { size: "md", style: tmp5.backIcon, color: "interactive-text-default" };
      const tmp17 = metroRequire(Icon, obj4);
      cResult[7] = Icon;
      cResult[8] = tmp5.backIcon;
      cResult[9] = tmp17;
      tmp16 = tmp17;
    }
  : (includeNotificationsCount) => {
      let c0;
      let items4;
      let items5;
      let obj3;
      let obj5;
      let obj7;
      let totalMentionCount;
      let flag = includeNotificationsCount.includeNotificationsCount;
      if (flag === undefined) {
        flag = false;
      }
      _require = undefined;
      let memo;
      const Icon = includeNotificationsCount.Icon;
      const tmp = closure_8();
      const items = [GuildReadStateStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
      let num = 0;
      const value = memo(16336)().value;
      const tmp5 = memo;
      if (null != stateFromStores) {
        num = stateFromStores;
      }
      let num2 = 0;
      if (flag) {
        num2 = value;
      }
      const sum = num + num2;
      _require = sum;
      const items1 = [sum];
      memo = react.useMemo(() => {
        let BADGE_SIZE;
        if (c0 < 10) {
          BADGE_SIZE = native.BADGE_SIZE;
        } else {
          BADGE_SIZE = native.BADGE_SIZE + 8;
        }
        return BADGE_SIZE;
      }, items1);
      const items2 = [sum, memo];
      const memo1 = react.useMemo(() => {
        if (0 !== c0) {
          const BADGE_PADDING = native.BADGE_PADDING;
          size = {
            shape: ClipView.CutoutShape.RoundedRect,
            x: 12 - BADGE_PADDING,
            y: 16 - BADGE_PADDING,
            width: memo + 2 * BADGE_PADDING,
            height: native.BADGE_SIZE + 2 * BADGE_PADDING,
            cornerRadius: (native.BADGE_SIZE + 2 * BADGE_PADDING) / 2,
          };
          return size;
        }
      }, items2);
      size = undefined;
      const tmp2Result = require("utils/PlatformUtils");
      if (tmp2Result.isAndroid()) {
        size = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
      }
      const obj2 = { style: size, children: closure_7(View, obj3) };
      obj3 = { style: tmp.backIcon, children: items5 };
      const tmp5Result = tmp5(8469);
      if (null != memo1) {
        const items3 = [memo1];
        items4 = items3;
      } else {
        items4 = [];
      }
      const obj4 = { cutouts: items4, children: closure_6(Icon, obj5) };
      obj5 = { size: "md", style: tmp.backIcon, color: "interactive-text-default" };
      items5 = [closure_6(tmp5Result, obj4)];
      let tmp9Result = null;
      if (sum > 0) {
        const obj6 = { style: tmp.badgeWrapper, children: closure_6(require("native").Badge, obj7) };
        obj7 = { value: sum, maxValue: 99 };
        tmp9Result = closure_6(View, obj6);
      }
      items5[1] = tmp9Result;
      return closure_6(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let includeNotificationsCount;
      let tmp11;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      ({ navigation, includeNotificationsCount } = arg0);
      if (cResult[0] !== navigation) {
        const state = navigation.getState();
        cResult[0] = navigation;
        cResult[1] = state;
        tmp5 = state;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === (undefined !== includeNotificationsCount && includeNotificationsCount)) {
        let tmp8;
        if (cResult[3] === tmp5.index > 0) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
      const obj2 = {
        includeNotificationsCount: undefined !== includeNotificationsCount && includeNotificationsCount,
        Icon: null,
      };
      if (tmp5.index > 0) {
        obj2.Icon = ArrowLargeLeftIcon.ArrowLargeLeftIcon;
        tmp11 = obj2;
      } else {
        obj2.Icon = XSmallIcon.XSmallIcon;
        tmp11 = obj2;
      }
      const tmp9Result = metroRequire(closure_9, tmp11);
      cResult[2] = undefined !== includeNotificationsCount && includeNotificationsCount;
      cResult[3] = tmp5.index > 0;
      cResult[4] = tmp9Result;
      tmp8 = tmp9Result;
    }
  : (navigation) => {
      let tmp5;
      navigation = navigation.navigation;
      let flag = navigation.includeNotificationsCount;
      if (flag === undefined) {
        flag = false;
      }
      const items = [navigation];
      const obj = { includeNotificationsCount: flag, Icon: null };
      if (react.useMemo(() => navigation.getState().index > 0, items)) {
        obj.Icon = ArrowLargeLeftIcon.ArrowLargeLeftIcon;
        tmp5 = obj;
      } else {
        obj.Icon = XSmallIcon.XSmallIcon;
        tmp5 = obj;
      }
      return metroRequire(closure_9, tmp5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (includeNotificationsCount) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      includeNotificationsCount = includeNotificationsCount.includeNotificationsCount;
      if (cResult[0] !== (undefined !== includeNotificationsCount && includeNotificationsCount)) {
        const obj2 = {
          includeNotificationsCount: undefined !== includeNotificationsCount && includeNotificationsCount,
          Icon: ArrowLargeLeftIcon.ArrowLargeLeftIcon,
        };
        const tmp8 = metroRequire(closure_9, obj2);
        cResult[0] = undefined !== includeNotificationsCount && includeNotificationsCount;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : (includeNotificationsCount) => {
      let flag = includeNotificationsCount.includeNotificationsCount;
      if (flag === undefined) {
        flag = false;
      }
      const obj = { includeNotificationsCount: flag, Icon: ArrowLargeLeftIcon.ArrowLargeLeftIcon };
      return metroRequire(closure_9, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (count) => {
      let first;
      let items;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(6);
      count = count.count;
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = metroRequire(XLargeIcon.XLargeIcon, { size: "sm", color: "white" });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== count) {
        let tmp9 = null;
        if (count > 0) {
          const obj2 = { value: count };
          tmp9 = metroRequire(native.Badge, obj2);
        }
        cResult[1] = count;
        cResult[2] = tmp9;
        tmp8 = tmp9;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === tmp4.iconWithBadge) {
        let tmp11;
        if (cResult[4] === tmp8) {
          tmp11 = cResult[5];
        }
        return tmp11;
      }
      const obj3 = { style: tmp4.iconWithBadge, children: items };
      items = [first, tmp8];
      const tmp12 = metroImportDefault(View, obj3);
      cResult[3] = tmp4.iconWithBadge;
      cResult[4] = tmp8;
      cResult[5] = tmp12;
      tmp11 = tmp12;
    }
  : (count) => {
      let items;
      count = count.count;
      const obj = { style: closure_8().iconWithBadge, children: items };
      items = [metroRequire(XLargeIcon.XLargeIcon, { size: "sm", color: "white" })];
      let tmp3Result = null;
      if (count > 0) {
        const obj2 = { value: count };
        tmp3Result = metroRequire(native.Badge, obj2);
      }
      items[1] = tmp3Result;
      return metroImportDefault(View, obj);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx");

export const BACK_ICON_WITH_BADGE_HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };
export const SettingsLeftIconWithBadge = tmp3;
export const LeftBackIconWithBadge = tmp4;
export const CloseIconWithBadgeOnSide = tmp5;
