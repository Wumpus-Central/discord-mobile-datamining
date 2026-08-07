// discord_app/modules/user_profile/native/UserProfileNameplateEditButton.tsx
import set from "set";
import get_ActivityIndicator from "Button";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import { COLLECTIBLES_PREVIEW_SIZE } from "ARBITRARY_LARGE_OFFSET";
import { NOOP } from "sum";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
createCacheKey = { previewContainer: null, noneIcon: null };
createCacheKey = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, borderRadius: require("Themes").radii.xs, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: require("Themes").colors.TEXT_SUBTLE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { tintColor: require("Themes").colors.TEXT_SUBTLE };
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/user_profile/native/UserProfileNameplateEditButton.tsx");

export default function UserProfileNameplateEditButton(user) {
  let guildId;
  let isFetching;
  let nameplateData;
  let nameplateProduct;
  let nameplateRecord;
  let pendingNameplate;
  user = user.user;
  ({ pendingNameplate, guildId } = user);
  let dependencyMap;
  let nameplate;
  const tmp = createCacheKey();
  dependencyMap = tmp2;
  let obj = user(589);
  const items = [trackCommunicationDisabled];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (c2) {
      member = outer1_6.getMember(guildId, user.id);
    }
    return member;
  });
  let obj1 = user(8207);
  obj = { pendingValue: pendingNameplate, userValue: null, guildValue: null, guildId: null };
  const collectibles = user.collectibles;
  nameplate = undefined;
  if (collectibles != null) {
    nameplate = collectibles.nameplate;
  }
  obj[1] = nameplate;
  let nameplate1;
  if (stateFromStores != null) {
    const collectibles2 = stateFromStores.collectibles;
    if (collectibles2 != null) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  obj[2] = nameplate1;
  obj[3] = guildId;
  const profilePreviewValue = obj1.getProfilePreviewValue(obj);
  let skuId;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchNameplate = user(13873).useFetchNameplate(skuId);
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
    obj = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
    const intl4 = tmp3(1236).intl;
    obj[0] = intl4.string(tmp3(1236).t.x5CoXR);
    const intl5 = tmp3(1236).intl;
    obj[1] = intl5.string(tmp3(1236).t.MKDeyL);
    obj[2] = NOOP;
    obj[3] = <closure_4 animating size="large" />;
    return jsx(tmp3(13856).UserProfileEditFormButton, { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true });
  } else {
    let name;
    if (nameplateProduct != null) {
      name = nameplateProduct.name;
    }
    if (name == null) {
      const intl = tmp3(1236).intl;
      name = intl.string(tmp3(1236).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (tmp2) {
      formatToPlainStringResult = name;
      if (null == nameplate) {
        const intl2 = tmp3(1236).intl;
        obj1 = { label: null };
        obj1[0] = name;
        formatToPlainStringResult = intl2.formatToPlainString(tmp3(1236).t.ep5D4i, obj1);
      }
    }
    const obj2 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = tmp3(1236).intl;
    obj2[0] = intl3.string(tmp3(1236).t.x5CoXR);
    obj2[1] = formatToPlainStringResult;
    const obj3 = { text: null };
    obj3[0] = formatToPlainStringResult;
    obj2[2] = obj3;
    obj2[3] = tmp12;
    if (null != nameplateData) {
      if (null != nameplateRecord) {
        if (null != nameplateProduct) {
          const obj4 = { style: null, children: null };
          obj4[0] = tmp.previewContainer;
          const obj5 = { nameplate: null, fullOpacity: true, isSquarePreview: true };
          obj5[0] = nameplateData;
          obj4[1] = tmp15(guildId(9325), obj5);
          let tmp15Result = tmp15(closure_5, obj4);
        }
        obj2[4] = tmp15Result;
        return tmp15(tmp3(13856).UserProfileEditFormButton, obj2);
      }
    }
    const obj6 = { source: null, style: null };
    obj6[0] = guildId(8228);
    obj6[1] = tmp.noneIcon;
    tmp15Result = tmp15(tmp3(1297).Icon, obj6);
  }
};