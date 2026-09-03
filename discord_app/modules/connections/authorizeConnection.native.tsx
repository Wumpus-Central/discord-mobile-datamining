// === Module 9316: authorizeConnection ===

// Module 9316 (authorizeConnection)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import OperatorTypes from "OperatorTypes" /* 5361 */;

let closure_3 = OperatorTypes.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
const PlatformTypes = ME.PlatformTypes;
const result = set.fileFinishedImporting("modules/connections/authorizeConnection.native.tsx");

export default function authorizeConnection(overrideUrl) {
  ({ platformType, location: _location, onClose } = overrideUrl);
  let handleModalClose5 = onClose;
  overrideUrl = overrideUrl.overrideUrl;
  const successRedirect = overrideUrl.successRedirect;
  if (platformType === PlatformTypes.LEAGUE_OF_LEGENDS) {
    platformType = tmp.RIOT_GAMES;
  }
  if (null == _location) {
    _location = "mobile";
  }
  if (platformType === PlatformTypes.XBOX) {
    overrideUrl(4445).hideActionSheet();
    const obj15 = overrideUrl(4445);
    const tmp23 = overrideUrl;
    const items = [_location];
    overrideUrl(9317).showModal(items);
    if (null != onClose) {
      function handleModalClose(arg0) {
        if (handleModalClose5 != null) {
          tmp();
        }
        dispatcherDefault.unsubscribe("MODAL_POP", handleModalClose5);
      }
      handleModalClose5 = handleModalClose;
      const subscription = tmp23(706).subscribe("MODAL_POP", handleModalClose);
      const tmp23Result = tmp23(706);
    }
    const obj16 = overrideUrl(9317);
  } else {
    if (platformType !== tmp.PLAYSTATION) {
      if (platformType !== tmp.PLAYSTATION_STAGING) {
        if (platformType === tmp.CRUNCHYROLL) {
          overrideUrl(4445).hideActionSheet();
          const obj11 = overrideUrl(4445);
          const tmp15 = overrideUrl;
          const items1 = [_location];
          overrideUrl(9356).showModal(items1);
          if (null != onClose) {
            const handleModalClose4 = function handleModalClose(arg0) {
              if (handleModalClose5 != null) {
                tmp();
              }
              dispatcherDefault.unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose4;
            const subscription1 = tmp15(706).subscribe("MODAL_POP", handleModalClose4);
            const tmp15Result = tmp15(706);
          }
          const obj12 = overrideUrl(9356);
        } else if (platformType === tmp.DOMAIN) {
          overrideUrl(4445).hideActionSheet();
          const obj8 = overrideUrl(4445);
          const tmp10 = overrideUrl;
          let obj = { locationStack: null };
          const items2 = [_location];
          obj[0] = items2;
          overrideUrl(4724).pushLazy(handleModalClose5(2008)(9367, dependencyMap.paths), obj);
          if (null != onClose) {
            const handleModalClose3 = function handleModalClose(arg0) {
              if (handleModalClose5 != null) {
                tmp();
              }
              dispatcherDefault.unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose3;
            const subscription2 = tmp10(706).subscribe("MODAL_POP", handleModalClose3);
            const tmp10Result = tmp10(706);
          }
          const obj9 = overrideUrl(4724);
        } else {
          const value = overrideUrl(5236).get(platformType);
          let isFederated;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            let tmp28Result = tmp28(4445);
            tmp28Result.hideActionSheet();
            tmp28Result = tmp28(4724);
            obj = { platformType: null, location: null, successRedirect: null };
            obj[0] = platformType;
            obj[1] = _location;
            obj[2] = successRedirect;
            tmp28Result.pushLazy(handleModalClose5(2008)(9369, tmp29.paths), obj);
            if (null != onClose) {
              const handleModalClose2 = function handleModalClose(arg0) {
                if (handleModalClose5 != null) {
                  tmp();
                }
                dispatcherDefault.unsubscribe("MODAL_POP", handleModalClose5);
              };
              handleModalClose5 = handleModalClose2;
              const subscription3 = tmp28(706).subscribe("MODAL_POP", handleModalClose2);
              const tmp28Result1 = tmp28(706);
            }
          } else {
            if (null != overrideUrl) {
              if (platformType === closure_3) {
                let obj2 = handleModalClose5(8660);
                obj1 = { shouldConfirm: true, href: null, onConfirm: null };
                obj1[1] = overrideUrl;
                obj1[2] = function onConfirm() {
                  overrideUrl(closure_1_2[13]).openURL(overrideUrl);
                };
                obj2.handleClick(obj1);
              }
            }
            obj2 = { location: null, successRedirect: null };
            obj2[0] = _location;
            obj2[1] = successRedirect;
            const tmp28Result2 = tmp28(5359);
            tmp28(5359).authorize(platformType, obj2).then((body) => {
              const url = body.body.url;
              if (null != url) {
                overrideUrl(table[13]).openURL(url);
                const obj = overrideUrl(table[13]);
              }
            });
            const authorizeResult = tmp28(5359).authorize(platformType, obj2);
          }
          const obj18 = overrideUrl(5236);
          tmp29 = dependencyMap;
        }
      }
    }
    overrideUrl(4445).hideActionSheet();
    const obj13 = overrideUrl(4445);
    const tmp19 = overrideUrl;
    const items3 = [_location];
    overrideUrl(9345).showModal(items3, platformType);
    if (null != onClose) {
      handleModalClose5 = function handleModalClose(arg0) {
        if (handleModalClose5 != null) {
          tmp();
        }
        dispatcherDefault.unsubscribe("MODAL_POP", handleModalClose5);
      };
      const subscription4 = tmp19(706).subscribe("MODAL_POP", handleModalClose5);
      const tmp19Result = tmp19(706);
    }
    const obj14 = overrideUrl(9345);
  }
};