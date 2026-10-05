// discord_app/modules/shared_space_warnings/native/BlockedUserInVoiceChannelActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import SelectedChannelActionCreatorsDefault from "../../../actions/SelectedChannelActionCreators.tsx";
import SharedSpacesWarningStore from "../SharedSpacesWarningStore.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SharedSpaceWarningConstants from "../SharedSpaceWarningConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let channelId, hideActionSheetResult, obj1, tmp2, tmp5, trackResult;

let c10;
let c3;
let c9;
let closure_12;
let closure_14;
let closure_4;
let map1;
let obj2;
let obj3;
let obj4;
({ Image: c3, View: closure_4 } = react_native);
const setDismissalTimeForUser = SharedSpacesWarningStore.setDismissalTimeForUser;
({ BlockWarningEngagements: c9, VoiceChannelWarningSurfaces: c10 } = SharedSpaceWarningConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ Fragment: closure_12, jsxs: map1, jsx: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  headerImage: { alignSelf: "center", width: 73, height: 86 },
  headerText: obj3,
  centerText: { textAlign: "center", alignSelf: "center" },
  buttonGroup: obj4,
};
obj2 = { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
obj4 = { paddingVertical: nativeDefault.space.PX_16, gap: 8 };
let closure_15 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let stateFromStores;
      let tmp9;
      let obj = channelId(stateFromStores[12]);
      const cResult = obj.c(79);
      channelId = channelId.channelId;
      const blockedUserId = channelId.blockedUserId;
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [RelationshipStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== blockedUserId) {
        class E {
          constructor() {
            return closure_6.isBlocked(blockedUserId);
          }
        }
        cResult[1] = blockedUserId;
        cResult[2] = E;
      } else {
        class E {
          constructor() {
            return closure_6.isBlocked(blockedUserId);
          }
        }
      }
      const tmpResult = channelId(stateFromStores[13]);
      stateFromStores = tmpResult.useStateFromStores(first, E);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return closure_6.isBlocked(blockedUserId);
          }
        }
        let items1 = [ChannelStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        class E {
          constructor() {
            return closure_6.isBlocked(blockedUserId);
          }
        }
      }
      if (cResult[4] !== channelId) {
        class E {
          constructor() {
            return closure_6.isBlocked(blockedUserId);
          }
        }
        cResult[4] = channelId;
        cResult[5] = tmp11;
      } else {
        class E {
          constructor() {
            return closure_6.isBlocked(blockedUserId);
          }
        }
      }
      const tmpResult2 = channelId(stateFromStores[13]);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp11);
      const tmp13 = cResult[6];
      if (stateFromStores1 != null) {
        class E {
          constructor() {
            return closure_6.isBlocked(blockedUserId);
          }
        }
      }
      if (tmp13 === undefined) {
        class E {
          constructor() {
            return closure_6.isBlocked(blockedUserId);
          }
        }
      }
      const user = UserStore.getUser(blockedUserId);
      if (cResult[27] === channelId) {
        class E {
          constructor() {
            return closure_6.isBlocked(blockedUserId);
          }
        }
      }
      class J {
        constructor() {
          obj = closure_1(closure_2[14]);
          hideActionSheetResult = obj.hideActionSheet();
          tmp2 = blockedUserId;
          tmp3 = setDismissalTimeForUser(blockedUserId);
          tmp4 = closure_1(closure_2[15]);
          obj1 = {
            action: BlockWarningEngagements.CLICK_TO_STAY,
            channel_id: channelId,
            blocked_user_ids: null,
            ignored_user_ids: null,
            warning_surface: null,
          };
          track = tmp4.track;
          VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT = AnalyticEvents.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT;
          tmp5 = closure_2;
          if (tmp5) {
            items = [];
            items[0] = tmp2;
            items1 = items;
          } else {
            items1 = [];
          }
          obj1.blocked_user_ids = items1;
          if (tmp5) {
            items2 = [];
          } else {
            items2 = [];
            items2[0] = tmp2;
          }
          obj1.ignored_user_ids = items2;
          obj1.warning_surface = closure_10.POST_JOIN_SHEET;
          trackResult = track(VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
          return;
        }
      }
      cResult[27] = channelId;
      cResult[28] = stateFromStores;
      cResult[29] = blockedUserId;
      cResult[30] = J;
    }
  : (arg0) => {
      let blockedUserId;
      let channel_id;
      let formatToPlainString;
      let guild_id;
      let intl4;
      let intl6;
      let intl7;
      let intl8;
      let items4;
      let items5;
      let items6;
      let items7;
      let tmp11Result;
      let tmp9;
      let username;
      let w0YvUo;
      ({ channelId: require, blockedUserId } = arg0);
      let stateFromStores;
      const tmp = closure_15();
      const tmp3 = stateFromStores;
      let obj = require("get initialized");
      let items = [RelationshipStore];
      stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(blockedUserId));
      let obj2 = require("get initialized");
      let items1 = [ChannelStore];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(require));
      const user = UserStore.getUser(blockedUserId);
      let obj3 = { children: null };
      const intl = require("intl").intl;
      const string = intl.string;
      const t = require("intl").t;
      if (stateFromStores) {
        let items2 = [string(t.cpgfFk), "\n"];
        const intl3 = require("intl").intl;
        items2[2] = intl3.string(require("intl").t.UKQ4Cn);
        obj3.children = items2;
        tmp9 = obj3;
      } else {
        const items3 = [string(t.xj3j47), "\n"];
        const intl2 = require("intl").intl;
        items3[2] = intl2.string(require("intl").t.wWueRW);
        obj3.children = items3;
        tmp9 = obj3;
      }
      const obj4 = { style: tmp.container, children: items4 };
      const obj5 = { source: blockedUserId(tmp3[19]), style: tmp.headerImage };
      const tmp7Result = closure_13(closure_12, tmp9);
      const ActionSheet = require("ActionSheet").ActionSheet;
      items4 = [closure_14(closure_3, obj5), , ,];
      const obj6 = { style: tmp.headerText, children: items5 };
      const obj7 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp.centerText,
        children: intl4.string(require("intl").t["1/gpFh"]),
      };
      const Text = require("Text/Text").Text;
      intl4 = require("intl").intl;
      items5 = [closure_14(Text, obj7)];
      const obj8 = { variant: "text-md/medium", style: tmp.centerText, children: tmp7Result };
      items5[1] = closure_14(require("Text/Text").Text, obj8);
      items4[1] = closure_13(closure_4, obj6);
      const TableRowGroup = require("TableRowGroup").TableRowGroup;
      const TableRow = require("TableRow").TableRow;
      if (null != user) {
        const obj9 = { size: require("native").AvatarSizes.SMALL, user, guildId: guild_id };
        const Avatar = require("native").Avatar;
        guild_id = undefined;
        if (stateFromStores1 != null) {
          guild_id = stateFromStores1.guild_id;
        }
        tmp11Result = closure_14(Avatar, obj9);
      } else {
        tmp11Result = closure_14(require("UserIcon").UserIcon, {});
      }
      const obj10 = { icon: tmp11Result, label: formatToPlainString(w0YvUo, { userName: username }) };
      const intl5 = require("intl").intl;
      formatToPlainString = intl5.formatToPlainString;
      username = undefined;
      w0YvUo = require("intl").t.w0YvUo;
      if (user != null) {
        username = user.username;
      }
      const obj11 = { startExpanded: true, children: closure_13(closure_4, obj4) };
      const obj12 = { hasIcons: true, children: items6 };
      items6 = [closure_14(TableRow, obj10)];
      const obj13 = {
        icon: closure_14(require("MicrophoneIcon").MicrophoneIcon, {}),
        label: intl6.string(require("intl").t["+4O9nX"]),
      };
      const TableRow2 = require("TableRow").TableRow;
      intl6 = require("intl").intl;
      items6[1] = closure_14(TableRow2, obj13);
      items4[2] = closure_13(TableRowGroup, obj12);
      const obj14 = { style: tmp.buttonGroup, children: items7 };
      const obj15 = {
        size: "lg",
        onPress() {
          let items1;
          let items2;
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = SelectedChannelActionCreatorsDefault;
          obj2.disconnect();
          const obj3 = {
            action: constants.CLICK_TO_LEAVE,
            channel_id: require,
            blocked_user_ids: items1,
            ignored_user_ids: items2,
            warning_surface: constants2.POST_JOIN_SHEET,
          };
          const track = AnalyticsUtilsDefault.track;
          const VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT =
            AnalyticEvents.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT;
          AnalyticsUtilsDefault;
          if (stateFromStores) {
            const items = [blockedUserId];
            items1 = items;
          } else {
            items1 = [];
          }
          if (stateFromStores) {
            items2 = [];
          } else {
            items2 = [blockedUserId];
          }
          track(VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj3);
        },
        text: intl7.string(require("intl").t["Y56/oK"]),
      };
      const Button = require("components/Button/Button").Button;
      intl7 = require("intl").intl;
      items7 = [closure_14(Button, obj15)];
      const obj16 = {
        size: "lg",
        variant: "secondary",
        onPress() {
          let items1;
          let items2;
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          setDismissalTimeForUser(blockedUserId);
          const obj2 = {
            action: constants.CLICK_TO_STAY,
            channel_id: require,
            blocked_user_ids: items1,
            ignored_user_ids: items2,
            warning_surface: constants2.POST_JOIN_SHEET,
          };
          const track = AnalyticsUtilsDefault.track;
          const VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT =
            AnalyticEvents.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT;
          AnalyticsUtilsDefault;
          if (stateFromStores) {
            const items = [blockedUserId];
            items1 = items;
          } else {
            items1 = [];
          }
          if (stateFromStores) {
            items2 = [];
          } else {
            items2 = [blockedUserId];
          }
          track(VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj2);
        },
        text: intl8.string(require("intl").t.bCcJST),
      };
      const Button2 = require("components/Button/Button").Button;
      intl8 = require("intl").intl;
      items7[1] = closure_14(Button2, obj16);
      items4[3] = closure_13(closure_4, obj14);
      return closure_14(ActionSheet, obj11);
    };
const result = size.fileFinishedImporting(
  "modules/shared_space_warnings/native/BlockedUserInVoiceChannelActionSheet.tsx",
);

export default tmp7;
