// === Module 14479: UserProfileNameplateEditButton ===

// Module 14479 (UserProfileNameplateEditButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Constants2 from "Constants" /* 6714 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const COLLECTIBLES_PREVIEW_SIZE = Constants2.COLLECTIBLES_PREVIEW_SIZE;
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { previewContainer: size, noneIcon: obj2 };
size = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileNameplateEditButton.tsx");

export default function UserProfileNameplateEditButton(user) {
  let closure_2;
  let guildId;
  let intl3;
  let isFetching;
  let nameplate1;
  let nameplate2;
  let nameplateData;
  let nameplateProduct;
  let nameplateRecord;
  let obj6;
  let pendingNameplate;
  user = user.user;
  ({ pendingNameplate, guildId } = user);
  let nameplate;
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
  let obj2 = { pendingValue: pendingNameplate, userValue: nameplate1, guildValue: nameplate2, guildId };
  const collectibles = user.collectibles;
  nameplate1 = undefined;
  const getProfilePreviewValue = user(7848).getProfilePreviewValue;
  user(7848);
  if (collectibles != null) {
    nameplate1 = collectibles.nameplate;
  }
  nameplate2 = undefined;
  if (stateFromStores != null) {
    const collectibles2 = stateFromStores.collectibles;
    if (collectibles2 != null) {
      nameplate2 = collectibles2.nameplate;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj2);
  let skuId;
  const useFetchNameplate = user(14480).useFetchNameplate;
  user(14480);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchNameplate = useFetchNameplate(skuId);
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
    const UserProfileEditFormButton2 = tmp3(14461).UserProfileEditFormButton;
    const intl4 = tmp3(1126).intl;
    const intl5 = tmp3(1126).intl;
    return <UserProfileEditFormButton2 label={intl4.string(user(1126).t.x5CoXR)} buttonText={intl5.string(user(1126).t.MKDeyL)} onPress={NOOP} leading={null} loading disabled hideArrow />;
  } else {
    let name;
    if (nameplateProduct != null) {
      name = nameplateProduct.name;
    }
    if (name == null) {
      const intl = tmp3(1126).intl;
      name = intl.string(tmp3(1126).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (null != guildId) {
      formatToPlainStringResult = name;
      if (null == nameplate) {
        const intl2 = tmp3(1126).intl;
        const obj4 = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(tmp3(1126).t.ep5D4i, obj4);
      }
    }
    const obj5 = { label: intl3.string(user(1126).t.x5CoXR), buttonText: formatToPlainStringResult, accessibilityValue: obj6, onPress: tmp14, leading: null };
    const UserProfileEditFormButton = tmp3(14461).UserProfileEditFormButton;
    intl3 = tmp3(1126).intl;
    obj6 = { text: formatToPlainStringResult };
    if (null != nameplateData) {
      if (null != nameplateRecord) {
        let tmp17Result;
        if (null != nameplateProduct) {
          tmp17Result = <closure_5 style={tmp.previewContainer}>{null}</closure_5>;
        }
        obj5.leading = tmp17Result;
        return <UserProfileEditFormButton {...obj5} />;
      }
    }
    const Icon = tmp3(1188).Icon;
    tmp17Result = <Icon source={guildId(13030)} style={tmp.noneIcon} />;
  }
};