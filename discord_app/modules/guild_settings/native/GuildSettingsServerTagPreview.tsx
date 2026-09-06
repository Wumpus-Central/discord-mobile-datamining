// discord_app/modules/guild_settings/native/GuildSettingsServerTagPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const GuildTagBadgeSize = fn(7944).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let createStyles = {
  card: null,
  notice: null,
  message: null,
  unfocused: null,
  avatar: null,
  messageBody: null,
  usernameRow: null,
};
createStyles = { padding: nativeDefault.space.PX_16 };
createStyles.card = createStyles;
createStyles.notice = { marginBottom: nativeDefault.space.PX_12 };
let obj1 = { marginBottom: nativeDefault.space.PX_12 };
createStyles.message = { flexDirection: "row", columnGap: nativeDefault.space.PX_12, alignItems: "flex-start" };
createStyles.unfocused = { opacity: 0.5 };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.round };
createStyles.avatar = size;
createStyles.messageBody = { flex: 1 };
let obj2 = { flexDirection: "row", columnGap: nativeDefault.space.PX_12, alignItems: "flex-start" };
createStyles.usernameRow = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_4 };
let closure_13 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPreview.tsx");

export default function GuildSettingsServerTagPreview(guildId) {
  guildId = guildId.guildId;
  ({ tag, badge, primaryColor, secondaryColor, variant } = guildId);
  if (variant === undefined) {
    variant = "card";
  }
  const onAdopted = guildId.onAdopted;
  dependencyMap = undefined;
  const tmp = closure_13();
  let obj = guildId(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = onAdopted(4712);
  const name = obj2.useName(guildId, null, stateFromStores);
  let obj3 = onAdopted(1396);
  let avatarURL;
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(guildId, 40);
  }
  let identityGuildId;
  const source = obj3.makeSource(avatarURL);
  if (stateFromStores != null) {
    const primaryGuild = stateFromStores.primaryGuild;
    if (primaryGuild != null) {
      identityGuildId = primaryGuild.identityGuildId;
    }
  }
  let isDirty = identityGuildId === guildId;
  if (isDirty) {
    let identityEnabled;
    if (stateFromStores != null) {
      const primaryGuild2 = stateFromStores.primaryGuild;
      if (primaryGuild2 != null) {
        identityEnabled = primaryGuild2.identityEnabled;
      }
    }
    isDirty = true === identityEnabled;
  }
  [tmp11, c2] = _slicedToArray(noop.useState(false), 2);
  const items1 = [guildId, onAdopted];
  const callback = noop.useCallback(
    asyncGeneratorStep(async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              dependencyMap(true);
              let obj1 = tmp2(13914);
              dependencyMap = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.adoptGuildIdentity(guildId, true);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            closure_129_2(false);
            if (closure_128_0.ok) {
              if (closure_129_1 != null) {
                closure_129_1();
              }
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    }),
    items1,
  );
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp.notice, children: null };
  const intl = tmp2(1114).intl;
  const string = intl.string;
  const t = tmp2(1114).t;
  if (isDirty) {
    let stringResult = string(t.hRsJ7T);
  } else {
    stringResult = string(t.OVvzY0);
  }
  obj.children = stringResult;
  const items2 = [closure_10(guildId(4556).Text, obj)];
  obj = { spacing: tmp4(576).space.PX_12, children: null };
  let obj1 = { style: null, children: null };
  const items3 = [,];
  ({ message: arr4[0], unfocused: arr4[1] } = tmp);
  obj1.style = items3;
  obj2 = { source: tmp4(10159), style: tmp.avatar, importantForAccessibility: "no" };
  const items4 = [closure_10(closure_6, obj2)];
  obj3 = { style: tmp.messageBody, children: null };
  const items5 = [
    closure_10(guildId(4556).Text, { variant: "text-md/semibold", color: "text-default", children: "Locke" }),
  ];
  const obj4 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = tmp2(1114).intl;
  obj4.children = intl2.string(guildId(1114).t.KZQ4mF);
  items5[1] = closure_10(guildId(4556).Text, obj4);
  obj3.children = items5;
  items4[1] = closure_11(closure_7, obj3);
  obj1.children = items4;
  const items6 = [closure_11(closure_7, obj1), , ,];
  const obj5 = { style: tmp.message, children: null };
  const items7 = [closure_10(closure_6, { source, style: tmp.avatar, importantForAccessibility: "no" })];
  const obj7 = { style: tmp.messageBody, children: null };
  const obj8 = { style: tmp.usernameRow, children: null };
  const items8 = [
    closure_10(guildId(4556).Text, { variant: "text-md/semibold", color: "text-default", children: name }),
  ];
  let tmp15Result = null != tag;
  if (tmp15Result) {
    tmp15Result = "" !== tag;
  }
  if (tmp15Result) {
    const obj9 = { guildTag: tag, guildBadge: null };
    tmp15Result = undefined;
    if (null != badge) {
      const size = {
        badge,
        primaryTintColor: primaryColor,
        secondaryTintColor: secondaryColor,
        width: null,
        height: null,
      };
      ({ SIZE_12: obj16.width, SIZE_12: obj16.height } = GuildTagBadgeSize);
      tmp15Result = tmp15(tmp2(13915).GuildBadge, size);
    }
    obj9.guildBadge = tmp15Result;
    tmp15Result = tmp15(tmp2(9184).BaseGuildTagChiplet, obj9);
  }
  items8[1] = tmp15Result;
  obj8.children = items8;
  const items9 = [closure_11(closure_7, obj8)];
  const obj10 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl3 = tmp2(1114).intl;
  obj10.children = intl3.string(guildId(1114).t.LKsPRe);
  items9[1] = closure_10(guildId(4556).Text, obj10);
  obj7.children = items9;
  items7[1] = closure_11(closure_7, obj7);
  obj5.children = items7;
  items6[1] = closure_11(closure_7, obj5);
  const obj11 = { style: null, children: null };
  const items10 = [,];
  ({ message: arr11[0], unfocused: arr11[1] } = tmp);
  obj11.style = items10;
  const obj6 = { source, style: tmp.avatar, importantForAccessibility: "no" };
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  const tmp14 = closure_12;
  const tmp18 = closure_6;
  const items11 = [closure_10(tmp18, { source: onAdopted(13959), style: tmp.avatar, importantForAccessibility: "no" })];
  const obj13 = { style: tmp.messageBody, children: null };
  const items12 = [
    closure_10(guildId(4556).Text, { variant: "text-md/semibold", color: "text-default", children: "Phibi" }),
  ];
  const obj14 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl4 = tmp2(1114).intl;
  obj14.children = intl4.string(guildId(1114).t.vtCg11);
  items12[1] = closure_10(guildId(4556).Text, obj14);
  obj13.children = items12;
  items11[1] = closure_11(closure_7, obj13);
  obj11.children = items11;
  items6[2] = closure_11(closure_7, obj11);
  const obj15 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
  const intl5 = tmp2(1114).intl;
  obj15.text = intl5.string(guildId(1114).t.cQDYRu);
  obj15.loading = tmp11;
  if (!isDirty) {
    isDirty = tmp11;
  }
  if (!isDirty) {
    isDirty = guildId.isDirty;
  }
  if (!isDirty) {
    isDirty = null == tag;
  }
  if (!isDirty) {
    isDirty = "" === tag;
  }
  const obj16 = { children: null };
  obj15.disabled = isDirty;
  obj15.onPress = callback;
  items6[3] = closure_10(guildId(4975).Button, obj15);
  obj.children = items6;
  items2[1] = closure_11(guildId(4973).Stack, obj);
  obj16.children = items2;
  const tmp13Result = closure_11(tmp14, obj16);
  let tmp15Result1 = tmp13Result;
  if ("plain" !== variant) {
    const obj17 = { variant: "secondary", radius: 16, style: tmp.card, children: tmp13Result };
    tmp15Result1 = tmp15(tmp2(5607).Card, obj17);
  }
  return tmp15Result1;
}
