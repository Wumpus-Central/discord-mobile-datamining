// discord_app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import useMobileTenureBadgeImages2 from "hooks/useMobileTenureBadgeImages.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({
  image: { width: "100%", height: "100%" },
  imageContainer: { width: 110, height: 72, marginTop: 16 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (badge) => {
      let medium;
      const obj = react2;
      const cResult = obj.c(8);
      badge = badge.badge;
      const tmp3 = closure_9();
      let id;
      const useMobileTenureBadgeImages = useMobileTenureBadgeImages2.useMobileTenureBadgeImages;
      useMobileTenureBadgeImages2;
      if (badge != null) {
        id = badge.id;
      }
      const mobileTenureBadgeImages = useMobileTenureBadgeImages(id);
      if (mobileTenureBadgeImages != null) {
        medium = mobileTenureBadgeImages.medium;
      }
      let tmp7 = null;
      if (null != badge) {
        let tmp8;
        if (cResult[0] !== medium) {
          const obj2 = { uri: medium };
          cResult[0] = medium;
          cResult[1] = obj2;
          tmp8 = obj2;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] === tmp3.image) {
          let tmp9;
          if (cResult[3] === tmp8) {
            tmp9 = cResult[4];
          }
          if (cResult[5] === tmp3.imageContainer) {
            let tmp13;
            if (cResult[6] === tmp9) {
              tmp13 = cResult[7];
            }
            tmp7 = tmp13;
          }
          const tmp16 = <View style={tmp3.imageContainer}>{tmp9}</View>;
          cResult[5] = tmp3.imageContainer;
          cResult[6] = tmp9;
          cResult[7] = tmp16;
          tmp13 = tmp16;
        }
        const tmp12 = jsx(FastImageDefault, { resizeMode: "contain", style: tmp3.image, source: tmp8 });
        cResult[2] = tmp3.image;
        cResult[3] = tmp8;
        cResult[4] = tmp12;
        tmp9 = tmp12;
      }
      return tmp7;
    }
  : (badge) => {
      let medium;
      badge = badge.badge;
      const tmp = closure_9();
      let id;
      const useMobileTenureBadgeImages = useMobileTenureBadgeImages2.useMobileTenureBadgeImages;
      useMobileTenureBadgeImages2;
      if (badge != null) {
        id = badge.id;
      }
      const mobileTenureBadgeImages = useMobileTenureBadgeImages(id);
      if (mobileTenureBadgeImages != null) {
        medium = mobileTenureBadgeImages.medium;
      }
      let tmp6 = null;
      if (null != badge) {
        tmp6 = <View style={tmp.imageContainer}>{null}</View>;
        const obj3 = { uri: medium };
      }
      return tmp6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let badge;
      let badgeId;
      let closure_1;
      let targetRef;
      let tmp12;
      let tmp13;
      let tmp16;
      let tmp17;
      let tmp19;
      let tmp4;
      let tmp7;
      let obj = require("react");
      const cResult = obj.c(18);
      ({ badgeId, targetRef } = arg0);
      if (cResult[0] !== badgeId) {
        const tmpResult = require("TieredTenureBadgeUtils");
        const tieredTenureBadge = tmpResult.getTieredTenureBadge(badgeId);
        let tieredTenureBadgeData = null;
        if (null != tieredTenureBadge) {
          const tmpResult3 = require("TieredTenureBadgeUtils");
          tieredTenureBadgeData = tmpResult3.getTieredTenureBadgeData(tieredTenureBadge);
        }
        cResult[0] = badgeId;
        cResult[1] = tieredTenureBadgeData;
        tmp4 = tieredTenureBadgeData;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[2] !== tmp4) {
        let items1;
        if (null != tmp4) {
          const items = [tmp(2036).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
          items1 = items;
        } else {
          items1 = [];
        }
        cResult[2] = tmp4;
        cResult[3] = items1;
        tmp7 = items1;
      } else {
        tmp7 = cResult[3];
      }
      const tmpResult4 = require("useSelectedDismissibleContent");
      const tmp9 = _slicedToArray(tmpResult4.useSelectedDismissibleContent(tmp7), 2);
      importDefault = tmp11;
      const first = tmp9[0];
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(require("intl").t.Ajj8iG);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(require("intl").t["WUNqD/"]);
        cResult[4] = stringResult;
        cResult[5] = stringResult1;
        tmp13 = stringResult1;
        tmp12 = stringResult;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const TIERED_TENURE_BADGE_COACHMARK = tmp(2036).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK;
      if (cResult[6] !== tmp9[1]) {
        const fn = function h() {
          closure_1(ContentDismissActionType.USER_DISMISS);
        };
        cResult[6] = tmp9[1];
        cResult[7] = fn;
        tmp16 = fn;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] !== tmp4) {
        const fn2 = function v() {
          return <closure_10 badge={badge} />;
        };
        cResult[8] = tmp4;
        cResult[9] = fn2;
        tmp17 = fn2;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] !== tmp9[1]) {
        class B {
          constructor() {
            closure_1(ContentDismissActionType.TAKE_ACTION);
            const obj = openUserSettings;
            const obj2 = { screen: UserSettingsSections.PREMIUM };
            obj.openUserSettings(obj2);
          }
        }
        cResult[10] = tmp9[1];
        cResult[11] = B;
      } else {
        class B {
          constructor() {
            closure_1(ContentDismissActionType.TAKE_ACTION);
            const obj = openUserSettings;
            const obj2 = { screen: UserSettingsSections.PREMIUM };
            obj.openUserSettings(obj2);
          }
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            closure_1(ContentDismissActionType.TAKE_ACTION);
            const obj = openUserSettings;
            const obj2 = { screen: UserSettingsSections.PREMIUM };
            obj.openUserSettings(obj2);
          }
        }
        const stringResult2 = obj5.string(require("intl").t.RzWDqY);
        cResult[12] = stringResult2;
        tmp19 = stringResult2;
      } else {
        class B {
          constructor() {
            closure_1(ContentDismissActionType.TAKE_ACTION);
            const obj = openUserSettings;
            const obj2 = { screen: UserSettingsSections.PREMIUM };
            obj.openUserSettings(obj2);
          }
        }
      }
      if ((cResult[13] === first) === TIERED_TENURE_BADGE_COACHMARK) {
        class B {
          constructor() {
            closure_1(ContentDismissActionType.TAKE_ACTION);
            const obj = openUserSettings;
            const obj2 = { screen: UserSettingsSections.PREMIUM };
            obj.openUserSettings(obj2);
          }
        }
      }
      let obj2 = {
        offsetY: 12,
        title: tmp12,
        description: tmp13,
        position: "bottom",
        visible: tmp21,
        onDismiss: tmp16,
        renderImgComponent: tmp17,
        onButtonPress: B,
        buttonLabel: tmp19,
        buttonVariant: "experimental_premium-primary",
      };
      cResult[13] = first === TIERED_TENURE_BADGE_COACHMARK;
      cResult[14] = tmp16;
      cResult[15] = tmp17;
      cResult[16] = B;
      cResult[17] = obj2;
    }
  : (arg0) => {
      let badgeId;
      let closure_2;
      let constants2;
      let items1;
      let targetRef;
      let tieredTenureBadgeData;
      let first;
      dependencyMap = undefined;
      ({ targetRef, badgeId } = arg0);
      let obj = tieredTenureBadgeData(7132);
      const tieredTenureBadge = obj.getTieredTenureBadge(badgeId);
      tieredTenureBadgeData = null;
      if (null != tieredTenureBadge) {
        const tmpResult = tieredTenureBadgeData(7132);
        tieredTenureBadgeData = tmpResult.getTieredTenureBadgeData(tieredTenureBadge);
      }
      if (null != tieredTenureBadgeData) {
        const items = [tmp(2036).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
        items1 = items;
      } else {
        items1 = [];
      }
      const tmpResult3 = tieredTenureBadgeData(6901);
      const tmp5 = _slicedToArray(tmpResult3.useSelectedDismissibleContent(items1), 2);
      first = tmp5[0];
      dependencyMap = tmp7;
      const items2 = [tmp5[1], first, tieredTenureBadgeData];
      const memo = react.useMemo(() => {
        let badge;
        let intl;
        let intl2;
        let intl3;
        let obj = {
          offsetY: 12,
          title: intl.string(intl4.t.Ajj8iG),
          description: intl2.string(intl4.t["WUNqD/"]),
          position: "bottom",
          visible: first === dismissible_content.DismissibleContent.TIERED_TENURE_BADGE_COACHMARK,
          onDismiss() {
            closure_1_2(constants2.USER_DISMISS);
          },
          renderImgComponent() {
            return <closure_2_10 badge={badge} />;
          },
          onButtonPress() {
            closure_1_2(constants2.TAKE_ACTION);
            const obj = tieredTenureBadgeData(closure_2[15]);
            const obj2 = { screen: constants.PREMIUM };
            obj.openUserSettings(obj2);
          },
          buttonLabel: intl3.string(intl4.t.RzWDqY),
          buttonVariant: "experimental_premium-primary",
        };
        intl = intl4.intl;
        intl2 = intl4.intl;
        intl3 = intl4.intl;
        return obj;
      }, items2);
      const tmpResult4 = tieredTenureBadgeData(9895);
      const coachmark = tmpResult4.useCoachmark(targetRef, memo);
      return null;
    };
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx",
);

export default tmp2;
