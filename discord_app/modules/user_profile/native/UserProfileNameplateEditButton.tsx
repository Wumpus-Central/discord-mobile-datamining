// discord_app/modules/user_profile/native/UserProfileNameplateEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const COLLECTIBLES_PREVIEW_SIZE = fn(7208).COLLECTIBLES_PREVIEW_SIZE;
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { previewContainer: null, noneIcon: null };
let size = {
  height: COLLECTIBLES_PREVIEW_SIZE,
  width: COLLECTIBLES_PREVIEW_SIZE,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
createStyles.previewContainer = size;
createStyles = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles.noneIcon = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileNameplateEditButton.tsx");

export default function UserProfileNameplateEditButton(user) {
  user = user.user;
  ({ pendingNameplate, guildId } = user);
  const tmp = closure_9();
  dependencyMap = tmp2;
  let obj = user(504);
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (closure_2) {
      member = GuildMemberStore.getMember(guildId, user.id);
    }
    return member;
  });
  let obj1 = user(8166);
  obj = { pendingValue: pendingNameplate, userValue: null, guildValue: null, guildId: null };
  const collectibles = user.collectibles;
  let nameplate;
  if (collectibles != null) {
    nameplate = collectibles.nameplate;
  }
  obj.userValue = nameplate;
  let nameplate1;
  if (stateFromStores != null) {
    const collectibles2 = stateFromStores.collectibles;
    if (collectibles2 != null) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  obj.guildValue = nameplate1;
  obj.guildId = guildId;
  const profilePreviewValue = obj1.getProfilePreviewValue(obj);
  let skuId;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchNameplate = user(14635).useFetchNameplate(skuId);
  ({ nameplateProduct, nameplateData, nameplateRecord, isFetching } = fetchNameplate);
  if (null != guildId) {
    let nameplate2;
    if (stateFromStores != null) {
      const collectibles4 = stateFromStores.collectibles;
      if (collectibles4 != null) {
        nameplate2 = collectibles4.nameplate;
      }
    }
    nameplate = nameplate2;
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
    obj = {
      label: null,
      buttonText: null,
      onPress: null,
      leading: null,
      loading: true,
      disabled: true,
      hideArrow: true,
    };
    const intl4 = tmp3(1114).intl;
    obj.label = intl4.string(tmp3(1114).t.x5CoXR);
    const intl5 = tmp3(1114).intl;
    obj.buttonText = intl5.string(tmp3(1114).t.MKDeyL);
    obj.onPress = NOOP;
    obj.leading = <closure_4 animating size="large" />;
    return jsx(tmp3(14618).UserProfileEditFormButton, {
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
      const intl = tmp3(1114).intl;
      name = intl.string(tmp3(1114).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (tmp2) {
      formatToPlainStringResult = name;
      if (null == nameplate) {
        const intl2 = tmp3(1114).intl;
        obj1 = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(tmp3(1114).t.ep5D4i, obj1);
      }
    }
    const obj2 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = tmp3(1114).intl;
    obj2.label = intl3.string(tmp3(1114).t.x5CoXR);
    obj2.buttonText = formatToPlainStringResult;
    const obj3 = { text: formatToPlainStringResult };
    obj2.accessibilityValue = obj3;
    obj2.onPress = tmp12;
    if (null != nameplateData) {
      if (null != nameplateRecord) {
        if (null != nameplateProduct) {
          const obj4 = { style: tmp.previewContainer, children: null };
          const obj5 = { nameplate: nameplateData, fullOpacity: true, isSquarePreview: true };
          obj4.children = jsx(guildId(8818), { nameplate: nameplateData, fullOpacity: true, isSquarePreview: true });
          let tmp15Result = <closure_5 style={tmp.previewContainer}>{null}</closure_5>;
        }
        obj2.leading = tmp15Result;
        return jsx(tmp3(14618).UserProfileEditFormButton, obj2);
      }
    }
    const obj6 = { source: guildId(13172), style: tmp.noneIcon };
    tmp15Result = jsx(tmp3(1178).Icon, { source: guildId(13172), style: tmp.noneIcon });
  }
  const tmp3Result = user(14635);
}
