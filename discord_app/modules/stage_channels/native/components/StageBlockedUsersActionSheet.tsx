// === Module 8275: StageBlockedUsersActionSheet ===

// Module 8275 (StageBlockedUsersActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5571 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5578 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, channel, dependencyMap;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
let closure_8 = StageChannelsConstants.STAGE_BLOCKED_USERS_SHEET_KEY;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingHorizontal: 16 }, header: { padding: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 16 }, buttons: obj2, userContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginVertical: 8, width: "100%" }, avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4, marginEnd: 12 }, avatar: { opacity: 0.5 }, iconContainer: size, icon: { height: 12, width: 12 }, flex: { display: "flex", flexDirection: "row" }, blocked: obj3, ignored: obj4 };
obj2 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingVertical: 8 };
createStyles = createStyles.createStyles;
size = { position: "absolute", top: -4, right: 4, height: 16, width: 16, alignItems: "center", justifyContent: "center", borderRadius: 8, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj3 = { color: nativeDefault.unsafe_rawColors.RED_400 };
obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Icon;
  let channelId;
  let first;
  let guildId;
  let items2;
  let obj3;
  let participant;
  const obj = channelId(576);
  const cResult = obj.c(52);
  ({ participant, guildId, channelId } = arg0);
  const tmp4 = closure_11();
  const user = participant.user;
  const speaker = participant.speaker;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageChannelRoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp7;
    let tmp9;
    if (cResult[2] === user.id) {
      tmp7 = cResult[3];
    }
    const _Symbol = Symbol;
    const tmpResult = channelId(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [RelationshipStore];
      cResult[4] = items1;
      tmp9 = items1;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] !== user.id) {
      class T {
        constructor() {
          return RelationshipStore.isBlocked(user.id);
        }
      }
      cResult[5] = user.id;
      cResult[6] = T;
    } else {
      class T {
        constructor() {
          return RelationshipStore.isBlocked(user.id);
        }
      }
    }
    const tmpResult2 = channelId(504);
    const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, T);
    if (cResult[7] === guildId) {
      class T {
        constructor() {
          return RelationshipStore.isBlocked(user.id);
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return RelationshipStore.isBlocked(user.id);
          }
        }
        cResult[10] = obj4.string(channelId(1126).t.suRApw);
        const stringResult = obj4.string(channelId(1126).t.suRApw);
      } else {
        class T {
          constructor() {
            return RelationshipStore.isBlocked(user.id);
          }
        }
      }
      if (speaker) {
        class T {
          constructor() {
            return RelationshipStore.isBlocked(user.id);
          }
        }
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              return RelationshipStore.isBlocked(user.id);
            }
          }
          const stringResult1 = obj5.string(channelId(1126).t.LqMmG2);
          cResult[11] = stringResult1;
        } else {
          class T {
            constructor() {
              return RelationshipStore.isBlocked(user.id);
            }
          }
        }
      } else {
        class T {
          constructor() {
            return RelationshipStore.isBlocked(user.id);
          }
        }
      }
      if (cResult[13] === tmp13) {
        class T {
          constructor() {
            return RelationshipStore.isBlocked(user.id);
          }
        }
        if (cResult[16] === speaker) {
          class T {
            constructor() {
              return RelationshipStore.isBlocked(user.id);
            }
          }
        }
        let tmp23 = speaker;
        if (tmp23) {
          class T {
            constructor() {
              return RelationshipStore.isBlocked(user.id);
            }
          }
          const obj2 = { style: items2, children: closure_9(Icon, obj3) };
          items2 = [tmp4.iconContainer];
          obj3 = { style: tmp4.icon, source: user(8276), color: user(587).unsafe_rawColors.WHITE };
          Icon = channelId(1188).Icon;
          tmp23 = closure_9(View, obj2);
        }
        cResult[16] = speaker;
        cResult[17] = tmp4.icon;
        cResult[18] = tmp4.iconContainer;
        cResult[19] = tmp23;
      }
      const obj6 = { source: tmp13, size: channelId(1188).AvatarSizes.REFRESH_MEDIUM_32, style: tmp4.avatar };
      const CutoutableAvatarImage = channelId(1188).CutoutableAvatarImage;
      cResult[13] = tmp13;
      cResult[14] = tmp4.avatar;
      cResult[15] = closure_9(CutoutableAvatarImage, obj6);
      const tmp21 = closure_9(CutoutableAvatarImage, obj6);
    }
    const avatarSource = user.getAvatarSource(guildId);
    cResult[7] = guildId;
    cResult[8] = user;
    cResult[9] = avatarSource;
  }
  const fn = function c() {
    return StageChannelRoleStore.isModerator(user.id, channelId);
  };
  cResult[1] = channelId;
  cResult[2] = user.id;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((guildId) => {
  let Icon;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items8;
  let items9;
  let obj7;
  let participant;
  let str;
  let stringResult;
  let stringResult1;
  ({ participant, channelId: require } = guildId);
  guildId = guildId.guildId;
  const tmp = closure_11();
  const user = participant.user;
  let speaker = participant.speaker;
  const items = [StageChannelRoleStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => StageChannelRoleStore.isModerator(user.id, require));
  const items1 = [RelationshipStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => RelationshipStore.isBlocked(user.id));
  const avatarSource = user.getAvatarSource(guildId);
  const intl = intl7.intl;
  if (speaker) {
    const intl3 = intl7.intl;
    stringResult = intl3.string(intl7.t.LqMmG2);
  } else {
    stringResult = tmp7;
    if (stateFromStores) {
      const intl2 = intl7.intl;
      stringResult = intl2.string(intl7.t.GMZqSi);
    }
  }
  const obj3 = { style: tmp.userContainer, children: items4 };
  const obj4 = { style: tmp.avatarContainer, children: items2 };
  const obj5 = { source: avatarSource, size: native.AvatarSizes.REFRESH_MEDIUM_32, style: tmp.avatar };
  const CutoutableAvatarImage = native.CutoutableAvatarImage;
  items2 = [closure_9(CutoutableAvatarImage, obj5), ];
  if (speaker) {
    const obj6 = { style: items3, children: closure_9(Icon, obj7) };
    items3 = [tmp.iconContainer];
    obj7 = { style: tmp.icon, source: user(8276), color: user(587).unsafe_rawColors.WHITE };
    Icon = native.Icon;
    speaker = closure_9(View, obj6);
  }
  items2[1] = speaker;
  items4 = [closure_10(View, obj4), ];
  const obj8 = { style: tmp.flex, children: items5 };
  const obj9 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: str.toString() };
  str = participant.user;
  const Text = Text_Text.Text;
  items5 = [closure_9(Text, obj9), ];
  const user2 = participant.user;
  let tmp9Result = !user2.hasUniqueUsername();
  user2.hasUniqueUsername();
  if (tmp9Result) {
    const obj10 = { variant: "text-sm/medium", color: "text-default", children: items6 };
    items6 = ["#", participant.user.discriminator];
    tmp9Result = closure_10(Text_Text.Text, obj10);
  }
  items5[1] = tmp9Result;
  const items7 = [closure_10(View, obj8), ];
  const obj11 = { style: tmp.flex, children: items8 };
  const obj12 = { style: stateFromStores1 ? tmp.blocked : tmp.ignored, children: stringResult1 };
  const LegacyText = native.LegacyText;
  const intl4 = intl7.intl;
  const string = intl4.string;
  const t = intl7.t;
  if (stateFromStores1) {
    stringResult1 = string(t["4bDptI"]);
  } else {
    stringResult1 = string(t.tFY5Zb);
  }
  const obj13 = { children: items7 };
  items8 = [closure_9(LegacyText, obj12), ];
  const obj14 = { variant: "text-sm/medium", color: "text-muted", children: items9 };
  items9 = [" ", "| ", stringResult];
  items8[1] = closure_10(Text_Text.Text, obj14);
  items7[1] = closure_10(View, obj11);
  items4[1] = closure_10(View, obj13);
  return closure_10(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let blockedUserCount;
  let header;
  let header2;
  let header3;
  let ignoredUserCount;
  let items;
  let items1;
  let items2;
  let title;
  let title2;
  let title3;
  const obj = react2;
  const cResult = obj.c(38);
  ({ blockedUserCount, ignoredUserCount } = arg0);
  const tmp4 = closure_11();
  if (blockedUserCount > 0) {
    if (ignoredUserCount > 0) {
      let first;
      let tmp36;
      let tmp39;
      let tmp41;
      const _Symbol = Symbol;
      ({ header: header2, title: title2 } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = intl7.intl;
        const stringResult = intl5.string(intl7.t.Uzdyho);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.title) {
        const obj2 = { style: title2, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: first };
        const tmp38 = React4(Text_Text.Text, obj2);
        cResult[1] = tmp4.title;
        cResult[2] = tmp38;
        tmp36 = tmp38;
      } else {
        tmp36 = cResult[2];
      }
      const _Symbol2 = Symbol;
      const description3 = tmp4.description;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl6 = intl7.intl;
        const stringResult1 = intl6.string(intl7.t["P/KFXz"]);
        cResult[3] = stringResult1;
        tmp39 = stringResult1;
      } else {
        tmp39 = cResult[3];
      }
      if (cResult[4] !== tmp4.description) {
        const obj3 = { style: description3, variant: "text-sm/medium", color: "text-default", children: tmp39 };
        const tmp43 = React4(Text_Text.Text, obj3);
        cResult[4] = tmp4.description;
        cResult[5] = tmp43;
        tmp41 = tmp43;
      } else {
        tmp41 = cResult[5];
      }
      if (cResult[6] === tmp4.header) {
        if (cResult[7] === tmp36) {
          let tmp44;
          if (cResult[8] === tmp41) {
            tmp44 = cResult[9];
          }
          return tmp44;
        }
      }
      const obj4 = { style: header2, children: items };
      items = [tmp36, tmp41];
      const tmp47 = authStore(View, obj4);
      cResult[6] = tmp4.header;
      cResult[7] = tmp36;
      cResult[8] = tmp41;
      cResult[9] = tmp47;
      tmp44 = tmp47;
    }
  }
  if (ignoredUserCount > 0) {
    let tmp19;
    ({ header, title } = tmp4);
    if (cResult[10] !== ignoredUserCount) {
      const intl3 = intl7.intl;
      const obj5 = { number: ignoredUserCount };
      const formatResult = intl3.format(intl7.t.wvygk8, obj5);
      cResult[10] = ignoredUserCount;
      cResult[11] = formatResult;
      tmp19 = formatResult;
    } else {
      tmp19 = cResult[11];
    }
    if (cResult[12] === tmp4.title) {
      let tmp21;
      let tmp24;
      if (cResult[13] === tmp19) {
        tmp21 = cResult[14];
      }
      const description2 = tmp4.description;
      if (cResult[15] !== ignoredUserCount) {
        const intl4 = intl7.intl;
        const obj6 = { number: ignoredUserCount };
        const formatResult1 = intl4.format(intl7.t.Ri3o33, obj6);
        cResult[15] = ignoredUserCount;
        cResult[16] = formatResult1;
        tmp24 = formatResult1;
      } else {
        tmp24 = cResult[16];
      }
      if (cResult[17] === tmp4.description) {
        let tmp26;
        if (cResult[18] === tmp24) {
          tmp26 = cResult[19];
        }
        if (cResult[20] === tmp4.header) {
          if (cResult[21] === tmp21) {
            let tmp29;
            if (cResult[22] === tmp26) {
              tmp29 = cResult[23];
            }
            return tmp29;
          }
        }
        const obj7 = { style: header, children: items1 };
        items1 = [tmp21, tmp26];
        const tmp32 = authStore(View, obj7);
        cResult[20] = tmp4.header;
        cResult[21] = tmp21;
        cResult[22] = tmp26;
        cResult[23] = tmp32;
        tmp29 = tmp32;
      }
      const obj8 = { style: description2, variant: "text-sm/medium", color: "text-default", children: tmp24 };
      const tmp28 = React4(Text_Text.Text, obj8);
      cResult[17] = tmp4.description;
      cResult[18] = tmp24;
      cResult[19] = tmp28;
      tmp26 = tmp28;
    }
    const obj9 = { style: title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp19 };
    const tmp23 = React4(Text_Text.Text, obj9);
    cResult[12] = tmp4.title;
    cResult[13] = tmp19;
    cResult[14] = tmp23;
    tmp21 = tmp23;
  } else {
    let tmp5;
    ({ header: header3, title: title3 } = tmp4);
    if (cResult[24] !== blockedUserCount) {
      const intl = intl7.intl;
      const obj10 = { number: blockedUserCount };
      const formatResult2 = intl.format(intl7.t.HviVA9, obj10);
      cResult[24] = blockedUserCount;
      cResult[25] = formatResult2;
      tmp5 = formatResult2;
    } else {
      tmp5 = cResult[25];
    }
    if (cResult[26] === tmp4.title) {
      let tmp7;
      let tmp10;
      if (cResult[27] === tmp5) {
        tmp7 = cResult[28];
      }
      const description = tmp4.description;
      if (cResult[29] !== blockedUserCount) {
        const intl2 = intl7.intl;
        const obj11 = { number: blockedUserCount };
        const formatResult3 = intl2.format(intl7.t["28qZMU"], obj11);
        cResult[29] = blockedUserCount;
        cResult[30] = formatResult3;
        tmp10 = formatResult3;
      } else {
        tmp10 = cResult[30];
      }
      if (cResult[31] === tmp4.description) {
        let tmp12;
        if (cResult[32] === tmp10) {
          tmp12 = cResult[33];
        }
        if (cResult[34] === tmp4.header) {
          if (cResult[35] === tmp7) {
            let tmp15;
            if (cResult[36] === tmp12) {
              tmp15 = cResult[37];
            }
            return tmp15;
          }
        }
        const obj12 = { style: header3, children: items2 };
        items2 = [tmp7, tmp12];
        const tmp18 = authStore(View, obj12);
        cResult[34] = tmp4.header;
        cResult[35] = tmp7;
        cResult[36] = tmp12;
        cResult[37] = tmp18;
        tmp15 = tmp18;
      }
      const obj13 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp10 };
      const tmp14 = React4(Text_Text.Text, obj13);
      cResult[31] = tmp4.description;
      cResult[32] = tmp10;
      cResult[33] = tmp14;
      tmp12 = tmp14;
    }
    const obj14 = { style: title3, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp5 };
    const tmp9 = React4(Text_Text.Text, obj14);
    cResult[26] = tmp4.title;
    cResult[27] = tmp5;
    cResult[28] = tmp9;
    tmp7 = tmp9;
  }
}) : ((arg0) => {
  let blockedUserCount;
  let ignoredUserCount;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let items2;
  let obj11;
  let obj13;
  let obj6;
  let obj8;
  let obj9;
  ({ blockedUserCount, ignoredUserCount } = arg0);
  const tmp = closure_11();
  if (blockedUserCount > 0) {
    if (ignoredUserCount > 0) {
      const obj2 = { style: tmp.header, children: items };
      const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl3.string(intl7.t.Uzdyho) };
      const Text3 = Text_Text.Text;
      intl3 = intl7.intl;
      items = [React4(Text3, obj3), ];
      const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl4.string(intl7.t["P/KFXz"]) };
      const Text4 = Text_Text.Text;
      intl4 = intl7.intl;
      items[1] = React4(Text4, obj4);
      obj9 = obj2;
    }
    return tmp2(tmp3, obj9);
  }
  if (ignoredUserCount > 0) {
    const obj = { style: tmp.header, children: items1 };
    const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.format(intl7.t.wvygk8, obj6) };
    const Text = Text_Text.Text;
    intl = intl7.intl;
    obj6 = { number: ignoredUserCount };
    items1 = [React4(Text, obj5), ];
    const obj7 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.format(intl7.t.Ri3o33, obj8) };
    const Text2 = Text_Text.Text;
    intl2 = intl7.intl;
    obj8 = { number: ignoredUserCount };
    items1[1] = React4(Text2, obj7);
    obj9 = obj;
  } else {
    obj9 = { style: tmp.header, children: items2 };
    const obj10 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl5.format(intl7.t.HviVA9, obj11) };
    const Text5 = Text_Text.Text;
    intl5 = intl7.intl;
    obj11 = { number: blockedUserCount };
    items2 = [React4(Text5, obj10), ];
    const obj12 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl6.format(intl7.t["28qZMU"], obj13) };
    const Text6 = Text_Text.Text;
    intl6 = intl7.intl;
    obj13 = { number: blockedUserCount };
    items2[1] = React4(Text6, obj12);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let arr4;
  let intl;
  let onPress;
  let obj = channel(576);
  const cResult = obj.c(36);
  channel = channel.channel;
  const onAccept = channel.onAccept;
  const tmp5 = closure_11();
  [r10020, dependencyMap] = onPress(arr4.useState(0), 2);
  onPress(arr4.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = onAccept(dependencyMap[16]);
      obj.hideActionSheet(closure_1_8);
    };
    cResult[0] = fn;
    onPress = fn;
  } else {
    onPress = cResult[0];
  }
  if (cResult[1] === channel) {
    let tmp8;
    let tmp10;
    let tmp14;
    if (cResult[2] === onAccept) {
      tmp8 = cResult[3];
    }
    const tmp2Result = channel(8277);
    const stageBlockedUsers = tmp2Result.useStageBlockedUsers(channel.id);
    const tmp2Result2 = channel(8277);
    const stageIgnoredUsers = tmp2Result2.useStageIgnoredUsers(channel.id);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.height);
        }
      }
      cResult[4] = E;
    } else {
      class E {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    const _Symbol2 = Symbol;
    const buttons = tmp5.buttons;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.height);
        }
      }
      const stringResult = obj4.string(channel(1126).t.mbD50D);
      cResult[5] = stringResult;
      tmp10 = stringResult;
    } else {
      class E {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    if (cResult[6] !== tmp8) {
      class E {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.height);
        }
      }
      const obj2 = { text: tmp10, onPress: tmp8 };
      cResult[6] = tmp8;
      cResult[7] = closure_9(channel(5594).Button, obj2);
      const tmp13 = closure_9(channel(5594).Button, obj2);
    } else {
      class E {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.height);
        }
      }
      const obj3 = { variant: "secondary", text: intl.string(channel(1126).t.CZGqeT), onPress };
      const Button = tmp2(5594).Button;
      intl = tmp2(1126).intl;
      const tmp15 = closure_9(Button, obj3);
      cResult[8] = tmp15;
      tmp14 = tmp15;
    } else {
      class E {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    if (cResult[9] === tmp5.buttons) {
      class E {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.height);
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.height);
          }
        }
        cResult[12] = tmp20;
      } else {
        class E {
          constructor(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.height);
          }
        }
      }
      if (cResult[13] === stageBlockedUsers) {
        class E {
          constructor(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.height);
          }
        }
        if (cResult[16] === channel) {
          class E {
            constructor(nativeEvent) {
              dependencyMap(nativeEvent.nativeEvent.layout.height);
            }
          }
          if (cResult[19] === stageBlockedUsers.length) {
            let tmp31;
            class E {
              constructor(nativeEvent) {
                dependencyMap(nativeEvent.nativeEvent.layout.height);
              }
            }
            const _Symbol5 = Symbol;
            const container = tmp5.container;
            class Z {
              constructor(arg0, arg1) {
                const obj = { participant: arr4[arg1], guildId: channel.getGuildId(), channelId: channel.id };
                return React4(closure_12, obj);
              }
            }
            if (tmp30 === Symbol.for("react.memo_cache_sentinel")) {
              class E {
                constructor(nativeEvent) {
                  dependencyMap(nativeEvent.nativeEvent.layout.height);
                }
              }
              const stringResult1 = obj9.string(channel(1126).t["3VoRLH"]);
              class Z {
                constructor(arg0, arg1) {
                  const obj = { participant: arr4[arg1], guildId: channel.getGuildId(), channelId: channel.id };
                  return React4(closure_12, obj);
                }
              }
              cResult[22] = stringResult1;
              tmp31 = stringResult1;
            } else {
              class E {
                constructor(nativeEvent) {
                  dependencyMap(nativeEvent.nativeEvent.layout.height);
                }
              }
            }
            if (cResult[23] !== arr4.length) {
              class E {
                constructor(nativeEvent) {
                  dependencyMap(nativeEvent.nativeEvent.layout.height);
                }
              }
              tmp34[0] = arr4.length;
              class Z {
                constructor(arg0, arg1) {
                  const obj = { participant: arr4[arg1], guildId: channel.getGuildId(), channelId: channel.id };
                  return React4(closure_12, obj);
                }
              }
              cResult[24] = tmp34;
            } else {
              class E {
                constructor(nativeEvent) {
                  dependencyMap(nativeEvent.nativeEvent.layout.height);
                }
              }
            }
            if (cResult[25] === Z) {
              class E {
                constructor(nativeEvent) {
                  dependencyMap(nativeEvent.nativeEvent.layout.height);
                }
              }
            }
            const obj5 = { inActionSheet: true, contentContainerStyle: container, accessibilityLabel: tmp31, sections: tmp34, renderItem: Z, itemSize: tmp20 };
            cResult[25] = Z;
            cResult[26] = tmp5.container;
            cResult[27] = tmp34;
            cResult[28] = closure_9(onAccept(6569), obj5);
            const tmp38 = closure_9(onAccept(6569), obj5);
          }
          class Z {
            constructor(arg0, arg1) {
              const obj = { participant: arr4[arg1], guildId: channel.getGuildId(), channelId: channel.id };
              return React4(closure_12, obj);
            }
          }
          const obj6 = { blockedUserCount: stageBlockedUsers.length, ignoredUserCount: stageIgnoredUsers.length };
          cResult[19] = stageBlockedUsers.length;
          cResult[20] = stageIgnoredUsers.length;
          cResult[21] = closure_9(closure_13, obj6);
          const tmp29 = closure_9(closure_13, obj6);
        }
        class Z {
          constructor(arg0, arg1) {
            const obj = { participant: arr4[arg1], guildId: channel.getGuildId(), channelId: channel.id };
            return React4(closure_12, obj);
          }
        }
        cResult[16] = channel;
        cResult[17] = arr4;
        cResult[18] = Z;
      }
      const items = [];
      HermesBuiltin.arraySpread(items, stageIgnoredUsers, HermesBuiltin.arraySpread(items, stageBlockedUsers, 0));
      cResult[13] = stageBlockedUsers;
      cResult[14] = stageIgnoredUsers;
      cResult[15] = items;
      arr4 = items;
    }
    const items1 = [tmp12, tmp14];
    class R {
      constructor() {
        onAccept(channel);
        first();
      }
    }
    cResult[9] = tmp5.buttons;
    cResult[10] = tmp12;
    cResult[11] = tmp18;
  }
  class R {
    constructor() {
      onAccept(channel);
      first();
    }
  }
  cResult[1] = channel;
  cResult[2] = onAccept;
  cResult[3] = R;
  tmp8 = R;
}) : ((channel) => {
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items2;
  let items3;
  channel = channel.channel;
  const onAccept = channel.onAccept;
  let items1;
  const tmp2 = closure_11();
  const tmp3 = items1(react.useState(0), 2);
  dependencyMap = tmp3[1];
  const first = tmp3[0];
  let obj = channel(8277);
  const stageBlockedUsers = obj.useStageBlockedUsers(channel.id);
  const obj2 = channel(8277);
  const stageIgnoredUsers = obj2.useStageIgnoredUsers(channel.id);
  const length = stageBlockedUsers.length;
  const length2 = stageIgnoredUsers.length;
  const callback = react.useCallback((nativeEvent) => {
    closure_2(nativeEvent.nativeEvent.layout.height);
  }, []);
  const obj3 = { bottom: true, style: tmp2.buttons, onLayout: callback, children: items };
  const SafeAreaPaddingView = channel(6619).SafeAreaPaddingView;
  const obj4 = {
    text: intl.string(channel(1126).t.mbD50D),
    onPress() {
      onAccept(channel);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_8);
    }
  };
  const Button = channel(5594).Button;
  intl = channel(1126).intl;
  items = [closure_9(Button, obj4), ];
  const obj5 = {
    variant: "secondary",
    text: intl2.string(channel(1126).t.CZGqeT),
    onPress: function handleDismiss() {
      const obj = onAccept(closure_2[16]);
      obj.hideActionSheet(closure_1_8);
    }
  };
  const Button2 = channel(5594).Button;
  intl2 = channel(1126).intl;
  items[1] = closure_9(Button2, obj5);
  items1 = [];
  const tmp6 = closure_10(SafeAreaPaddingView, obj3);
  HermesBuiltin.arraySpread(items1, stageIgnoredUsers, HermesBuiltin.arraySpread(items1, stageBlockedUsers, 0));
  const obj6 = { scrollable: true, header: closure_9(closure_13, { blockedUserCount: length, ignoredUserCount: length2 }), footer: tmp6, children: items3 };
  BottomSheet = channel(6645).BottomSheet;
  const obj7 = {
    inActionSheet: true,
    contentContainerStyle: tmp2.container,
    accessibilityLabel: intl3.string(channel(1126).t["3VoRLH"]),
    sections: items2,
    renderItem(arg0, arg1) {
      const obj = { participant: items1[arg1], guildId: channel.getGuildId(), channelId: channel.id };
      return React4(closure_12, obj);
    },
    itemSize() {
      return 48;
    }
  };
  const tmp8 = onAccept(6569);
  intl3 = channel(1126).intl;
  items2 = [items1.length];
  items3 = [closure_9(tmp8, obj7), ];
  const obj8 = { style: { height: first } };
  items3[1] = closure_9(View, obj8);
  return closure_10(BottomSheet, obj6);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx");

export default tmp4;