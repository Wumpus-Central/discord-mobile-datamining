// discord_app/modules/message_request/native/RestrictedMessagePreviewActions.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ReportModals from "../../in_app_reports/ReportModals.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import RestrictionConfirmationConstants from "../../relationships/native/RestrictionConfirmationConstants.tsx";
import PeopleUtilsDefault from "../../people/PeopleUtils.tsx";
import UserProfileAlertUtils from "../../user_profile/native/UserProfileAlertUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ AnalyticsPages: metroRequire, RelationshipTypes: metroImportDefault } = Constants);
let closure_8 = RestrictionConfirmationConstants.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonRow: obj3 };
obj2 = { gap: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewActions.tsx");

export default function RestrictedMessagePreviewActions(channel) {
  let formatResult;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isLoaded;
  let isReportable;
  let items10;
  let items9;
  let obj8;
  let tmp18;
  let tmp19;
  channel = channel.channel;
  const user = channel.user;
  let message;
  const tmp = closure_11();
  let obj = channel(message[8]);
  const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
  message = dMMessageToReport.message;
  ({ isReportable, isLoaded } = dMMessageToReport);
  let obj2 = channel(message[9]);
  const items = [RelationshipStore];
  const items1 = [user.id];
  const stateFromStores = obj2.useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id), items1);
  const items2 = [user.id];
  const items3 = [user.id];
  const callback = react.useCallback(() => {
    let obj3;
    const obj2 = { userId: user.id, context: obj3 };
    obj3 = { location: metroRequire.DM_CHANNEL };
    const obj = RelationshipActionCreatorsDefault;
    obj.addRelationship(obj2);
  }, items2);
  const items4 = [user.id];
  const callback1 = react.useCallback(() => {
    const obj = PeopleUtilsDefault;
    const obj2 = { userId: user.id, location: metroRequire.DM_CHANNEL };
    const result = obj.maybeConfirmFriendRequestAccept(obj2);
  }, items3);
  const items5 = [user];
  const callback2 = react.useCallback(() => {
    const obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: metroRequire.DM_CHANNEL };
    obj.cancelFriendRequest(user.id, obj2);
  }, items4);
  const items6 = [user.id, channel.id];
  const callback3 = react.useCallback(() => {
    let id;
    let obj2;
    let obj = {
      userDisplayName: obj2.getName(user),
      onConfirm() {
        const obj = user(message[10]);
        const obj2 = { location: constants.DM_CHANNEL };
        obj.removeFriend(id.id, obj2);
      },
    };
    const confirmRemoveFriend = UserProfileAlertUtils.confirmRemoveFriend;
    UserProfileAlertUtils;
    obj2 = UserUtilsDefault;
    confirmRemoveFriend(obj);
  }, items5);
  const items7 = [user.id];
  const callback4 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { userId: user.id, channelId: channel.id };
    obj.openLazy(asyncRequire(9830, dependencyMap.paths), closure_8, obj2);
  }, items6);
  const items8 = [message, channel.id];
  const callback5 = react.useCallback(() => {
    const obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: metroRequire.DM_CHANNEL };
    obj.unblockUser(user.id, obj2);
  }, items7);
  let tmp14 = null;
  const callback6 = react.useCallback(() => {
    let id;
    if (null != message) {
      let obj = ReportModals;
      const result = obj.showReportModalForFirstDM(tmp, () => {
        const obj = user(message[18]);
        obj.closePrivateChannel(id.id, true);
      });
    }
  }, items8);
  if (stateFromStores !== constants2.BLOCKED) {
    let obj3 = {
      size: "sm",
      variant: "secondary",
      text: intl.string(channel(message[20]).t.l4Emac),
      onPress: callback4,
    };
    const Button = tmp2(tmp3[19]).Button;
    intl = tmp2(tmp3[20]).intl;
    tmp14 = closure_9(Button, obj3);
  }
  let tmp16 = null;
  if (isReportable) {
    if (null != message) {
      const obj4 = {
        size: "sm",
        variant: "destructive",
        text: intl2.string(channel(message[20]).t.HHZmDn),
        disabled: null == message,
        onPress: callback6,
      };
      const Button2 = tmp2(tmp3[19]).Button;
      intl2 = tmp2(tmp3[20]).intl;
      tmp16 = closure_9(Button2, obj4);
    } else {
      tmp16 = null;
    }
  }
  if (constants2.NONE === stateFromStores) {
    tmp18 = null;
    tmp19 = null;
    formatResult = null;
    if (!user.bot) {
      const obj5 = {
        size: "sm",
        variant: "active",
        text: intl8.string(channel(message[20]).t["PMsq/b"]),
        onPress: callback,
      };
      const Button7 = tmp2(tmp3[19]).Button;
      intl8 = tmp2(tmp3[20]).intl;
      tmp19 = closure_9(Button7, obj5);
      tmp18 = null;
      formatResult = null;
    }
  } else if (constants2.PENDING_INCOMING === stateFromStores) {
    const intl5 = tmp2(tmp3[20]).intl;
    const format = intl5.format;
    const obj6 = { username: obj8.getName(user) };
    const uIomXw = tmp2(tmp3[20]).t.uIomXw;
    obj8 = user(message[13]);
    formatResult = format(uIomXw, obj6);
    const obj7 = {
      size: "sm",
      variant: "active",
      text: intl6.string(channel(message[20]).t["+WbSn5"]),
      onPress: callback1,
    };
    const Button5 = tmp2(tmp3[19]).Button;
    intl6 = tmp2(tmp3[20]).intl;
    tmp19 = closure_9(Button5, obj7);
    const obj9 = {
      size: "sm",
      variant: "secondary",
      text: intl7.string(channel(message[20]).t.rQSndv),
      onPress: callback2,
    };
    const Button6 = tmp2(tmp3[19]).Button;
    intl7 = tmp2(tmp3[20]).intl;
    tmp18 = closure_9(Button6, obj9);
  } else if (constants2.FRIEND === stateFromStores) {
    const obj10 = {
      size: "sm",
      variant: "secondary",
      text: intl4.string(channel(message[20]).t.cvSt1J),
      onPress: callback3,
    };
    const Button4 = tmp2(tmp3[19]).Button;
    intl4 = tmp2(tmp3[20]).intl;
    tmp19 = closure_9(Button4, obj10);
    tmp18 = null;
    formatResult = null;
  } else if (constants2.PENDING_OUTGOING === stateFromStores) {
    const obj11 = {
      size: "sm",
      variant: "active",
      text: intl3.string(channel(message[20]).t.xMH6vD),
      disabled: true,
      onPress: "Boolean",
    };
    const Button3 = tmp2(tmp3[19]).Button;
    intl3 = tmp2(tmp3[20]).intl;
    tmp19 = closure_9(Button3, obj11);
    tmp18 = null;
    formatResult = null;
  } else {
    tmp18 = null;
    tmp19 = null;
    formatResult = null;
    if (constants2.BLOCKED === stateFromStores) {
      const obj12 = {
        size: "sm",
        variant: "secondary",
        text: intl9.string(channel(message[20]).t.XyHpKH),
        onPress: callback5,
      };
      const Button8 = tmp2(tmp3[19]).Button;
      intl9 = tmp2(tmp3[20]).intl;
      tmp19 = closure_9(Button8, obj12);
      tmp18 = null;
      formatResult = null;
    }
  }
  let tmp28 = null != formatResult;
  const obj13 = { style: tmp.container, children: items9 };
  if (tmp28) {
    const obj14 = { variant: "text-sm/normal", color: "text-default", children: formatResult };
    tmp28 = closure_9(tmp2(tmp3[21]).Text, obj14);
  }
  items9 = [tmp28];
  const obj15 = { style: tmp.buttonRow, children: items10 };
  items10 = [tmp19, tmp18, tmp14, tmp16];
  items9[1] = closure_10(View, obj15);
  return closure_10(View, obj13);
}
