// discord_app/modules/user_profile/native/UserProfileNameplateEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const COLLECTIBLES_PREVIEW_SIZE = fn(7539).COLLECTIBLES_PREVIEW_SIZE;
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = { previewContainer: null, noneIcon: null };
let size = {
  height: COLLECTIBLES_PREVIEW_SIZE,
  width: COLLECTIBLES_PREVIEW_SIZE,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
obj2.previewContainer = size;
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileNameplateEditButton.tsx");

export default function UserProfileNameplateEditButton(user) {
  user = user.user;
  ({ pendingNameplate, guildId } = user);
  let nameplate;
  const tmp = closure_9();
  dependencyMap = tmp2;
  const items = [GuildMemberStore];
  const stateFromStores = user(504).useStateFromStores(items, () => {
    let member = null;
    if (closure_2) {
      member = GuildMemberStore.getMember(guildId, user.id);
    }
    return member;
  });
  const obj = user(504);
  const obj3 = { pendingValue: pendingNameplate, userValue: null, guildValue: null, guildId: null };
  const collectibles = user.collectibles;
  let nameplate1;
  if (collectibles != null) {
    nameplate1 = collectibles.nameplate;
  }
  obj3.userValue = nameplate1;
  let nameplate2;
  if (stateFromStores != null) {
    const collectibles2 = stateFromStores.collectibles;
    if (collectibles2 != null) {
      nameplate2 = collectibles2.nameplate;
    }
  }
  obj3.guildValue = nameplate2;
  obj3.guildId = guildId;
  const profilePreviewValue = user(8510).getProfilePreviewValue(obj3);
  const obj2 = user(8510);
  let skuId;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchNameplate = user(14997).useFetchNameplate(skuId);
  ({ nameplateProduct, nameplateData, nameplateRecord, isFetching } = fetchNameplate);
  if (null != guildId) {
    let nameplate3;
    if (stateFromStores != null) {
      const collectibles4 = stateFromStores.collectibles;
      if (collectibles4 != null) {
        nameplate3 = collectibles4.nameplate;
      }
    }
    nameplate = nameplate3;
  } else {
    const collectibles3 = user.collectibles;
    if (collectibles3 != null) {
      nameplate = collectibles3.nameplate;
    }
  }
  if (undefined !== pendingNameplate) {
    nameplate = pendingNameplate;
  }
  const items1 = [user, nameplate, guildId];
  if (isFetching) {
    const obj4 = {
      label: null,
      buttonText: null,
      onPress: null,
      leading: null,
      loading: true,
      disabled: true,
      hideArrow: true,
    };
    const intl4 = tmp3(1115).intl;
    obj4.label = intl4.string(tmp3(1115).t.x5CoXR);
    const intl5 = tmp3(1115).intl;
    obj4.buttonText = intl5.string(tmp3(1115).t.MKDeyL);
    obj4.onPress = NOOP;
    obj4.leading = <closure_4 animating size="large" />;
    return jsx(tmp3(14980).UserProfileEditFormButton, {
      label: null,
      buttonText: null,
      onPress: null,
      leading: null,
      loading: true,
      disabled: true,
      hideArrow: true,
    });
  } else {
    let name;
    if (nameplateProduct != null) {
      name = nameplateProduct.name;
    }
    if (name == null) {
      const intl = tmp3(1115).intl;
      name = intl.string(tmp3(1115).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (tmp2) {
      formatToPlainStringResult = name;
      if (null == nameplate) {
        const intl2 = tmp3(1115).intl;
        const obj5 = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(tmp3(1115).t.ep5D4i, obj5);
      }
    }
    const obj6 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = tmp3(1115).intl;
    obj6.label = intl3.string(tmp3(1115).t.x5CoXR);
    obj6.buttonText = formatToPlainStringResult;
    const obj7 = { text: formatToPlainStringResult };
    obj6.accessibilityValue = obj7;
    obj6.onPress = tmp12;
    if (null != nameplateData) {
      if (null != nameplateRecord) {
        if (null != nameplateProduct) {
          const obj8 = { style: tmp.previewContainer, children: null };
          const obj9 = { nameplate: nameplateData, fullOpacity: true, isSquarePreview: true };
          obj8.children = jsx(guildId(9175), { nameplate: nameplateData, fullOpacity: true, isSquarePreview: true });
          let tmp15Result = <closure_5 style={tmp.previewContainer}>{null}</closure_5>;
        }
        obj6.leading = tmp15Result;
        return jsx(tmp3(14980).UserProfileEditFormButton, obj6);
      }
    }
    const obj10 = { source: guildId(13566), style: tmp.noneIcon };
    tmp15Result = jsx(tmp3(1177).Icon, { source: guildId(13566), style: tmp.noneIcon });
  }
  const tmp3Result = user(14997);
}
