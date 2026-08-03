import { GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE as closure_3 } from "OperatorTypes";
import { PlatformTypes } from "ME";

const result = require("dispatcher").fileFinishedImporting("modules/connections/authorizeConnection.native.tsx");

export default function authorizeConnection(overrideUrl) {
  let _location;
  let onClose;
  let platformType;
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
    overrideUrl(4161).hideActionSheet();
    const obj15 = overrideUrl(4161);
    const tmp23 = overrideUrl;
    const items = [_location];
    overrideUrl(8940).showModal(items);
    if (null != onClose) {
      function handleModalClose(arg0) {
        if (handleModalClose5 != null) {
          tmp();
        }
        importDefault(709).unsubscribe("MODAL_POP", handleModalClose5);
      }
      handleModalClose5 = handleModalClose;
      const subscription = tmp23(709).subscribe("MODAL_POP", handleModalClose);
      const tmp23Result = tmp23(709);
    }
    const obj16 = overrideUrl(8940);
  } else {
    if (platformType !== tmp.PLAYSTATION) {
      if (platformType !== tmp.PLAYSTATION_STAGING) {
        if (platformType === tmp.CRUNCHYROLL) {
          overrideUrl(4161).hideActionSheet();
          const obj11 = overrideUrl(4161);
          const tmp15 = overrideUrl;
          const items1 = [_location];
          overrideUrl(8992).showModal(items1);
          if (null != onClose) {
            const handleModalClose4 = function handleModalClose(arg0) {
              if (handleModalClose5 != null) {
                tmp();
              }
              importDefault(709).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose4;
            const subscription1 = tmp15(709).subscribe("MODAL_POP", handleModalClose4);
            const tmp15Result = tmp15(709);
          }
          const obj12 = overrideUrl(8992);
        } else if (platformType === tmp.DOMAIN) {
          overrideUrl(4161).hideActionSheet();
          const obj8 = overrideUrl(4161);
          const tmp10 = overrideUrl;
          let obj = { locationStack: null };
          const items2 = [_location];
          obj[0] = items2;
          overrideUrl(4399).pushLazy(handleModalClose5(1959)(9003, dependencyMap.paths), obj);
          if (null != onClose) {
            const handleModalClose3 = function handleModalClose(arg0) {
              if (handleModalClose5 != null) {
                tmp();
              }
              importDefault(709).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose3;
            const subscription2 = tmp10(709).subscribe("MODAL_POP", handleModalClose3);
            const tmp10Result = tmp10(709);
          }
          const obj9 = overrideUrl(4399);
        } else {
          const value = overrideUrl(4875).get(platformType);
          let isFederated;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            let tmp28Result = tmp28(4161);
            tmp28Result.hideActionSheet();
            tmp28Result = tmp28(4399);
            obj = { platformType: null, location: null, successRedirect: null };
            obj[0] = platformType;
            obj[1] = _location;
            obj[2] = successRedirect;
            tmp28Result.pushLazy(handleModalClose5(1959)(9010, tmp29.paths), obj);
            if (null != onClose) {
              const handleModalClose2 = function handleModalClose(arg0) {
                if (handleModalClose5 != null) {
                  tmp();
                }
                importDefault(709).unsubscribe("MODAL_POP", handleModalClose5);
              };
              handleModalClose5 = handleModalClose2;
              const subscription3 = tmp28(709).subscribe("MODAL_POP", handleModalClose2);
              const tmp28Result1 = tmp28(709);
            }
          } else {
            if (null != overrideUrl) {
              if (platformType === closure_3) {
                let obj2 = handleModalClose5(8204);
                const obj1 = { shouldConfirm: true, href: null, onConfirm: null };
                obj1[1] = overrideUrl;
                obj1[2] = function onConfirm() {
                  overrideUrl(outer1_2[13]).openURL(overrideUrl);
                };
                obj2.handleClick(obj1);
              }
            }
            obj2 = { location: null, successRedirect: null };
            obj2[0] = _location;
            obj2[1] = successRedirect;
            const tmp28Result2 = tmp28(4999);
            tmp28(4999).authorize(platformType, obj2).then((body) => {
              const url = body.body.url;
              if (null != url) {
                overrideUrl(table[13]).openURL(url);
                const obj = overrideUrl(table[13]);
              }
            });
            const authorizeResult = tmp28(4999).authorize(platformType, obj2);
          }
          const obj18 = overrideUrl(4875);
          tmp29 = dependencyMap;
        }
      }
    }
    overrideUrl(4161).hideActionSheet();
    const obj13 = overrideUrl(4161);
    const tmp19 = overrideUrl;
    const items3 = [_location];
    overrideUrl(8975).showModal(items3, platformType);
    if (null != onClose) {
      handleModalClose5 = function handleModalClose(arg0) {
        if (handleModalClose5 != null) {
          tmp();
        }
        importDefault(709).unsubscribe("MODAL_POP", handleModalClose5);
      };
      const subscription4 = tmp19(709).subscribe("MODAL_POP", handleModalClose5);
      const tmp19Result = tmp19(709);
    }
    const obj14 = overrideUrl(8975);
  }
};