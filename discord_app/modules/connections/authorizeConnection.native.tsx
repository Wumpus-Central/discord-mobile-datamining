// === Module 9252: authorizeConnection ===

// Module 9252 (authorizeConnection)
import Constants from "Constants" /* 1074 */;
import LinkingDefault from "Linking" /* 4255 */;
import Constants2 from "Constants" /* 5408 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants2.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/connections/authorizeConnection.native.tsx");

export default function authorizeConnection(overrideUrl) {
  ({ platformType, location: _location, onClose } = overrideUrl);
  let handleModalClose5 = onClose;
  overrideUrl = overrideUrl.overrideUrl;
  const successRedirect = overrideUrl.successRedirect;
  if (platformType === PlatformTypes.LEAGUE_OF_LEGENDS) {
    platformType = PlatformTypes.RIOT_GAMES;
  }
  if (null == _location) {
    _location = "mobile";
  }
  if (platformType === PlatformTypes.XBOX) {
    overrideUrl(4527).hideActionSheet();
    const obj15 = overrideUrl(4527);
    const tmp23 = overrideUrl;
    const items = [_location];
    overrideUrl(9217).showModal(items);
    if (null != onClose) {
      function handleModalClose() {
        if (require != null) {
          tmp();
        }
        overrideUrl(573).unsubscribe("MODAL_POP", handleModalClose5);
      }
      handleModalClose5 = handleModalClose;
      const subscription = tmp23(573).subscribe("MODAL_POP", handleModalClose);
      const tmp23Result = tmp23(573);
    }
    const obj16 = overrideUrl(9217);
  } else {
    if (platformType !== PlatformTypes.PLAYSTATION) {
      if (platformType !== PlatformTypes.PLAYSTATION_STAGING) {
        if (platformType === PlatformTypes.CRUNCHYROLL) {
          overrideUrl(4527).hideActionSheet();
          const obj11 = overrideUrl(4527);
          const tmp15 = overrideUrl;
          const items1 = [_location];
          overrideUrl(9270).showModal(items1);
          if (null != onClose) {
            const handleModalClose4 = function handleModalClose() {
              if (require != null) {
                tmp();
              }
              overrideUrl(573).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose4;
            const subscription1 = tmp15(573).subscribe("MODAL_POP", handleModalClose4);
            const tmp15Result = tmp15(573);
          }
          const obj12 = overrideUrl(9270);
        } else if (platformType === PlatformTypes.DOMAIN) {
          overrideUrl(4527).hideActionSheet();
          const obj8 = overrideUrl(4527);
          const tmp10 = overrideUrl;
          let obj = { locationStack: null };
          const items2 = [_location];
          obj.locationStack = items2;
          overrideUrl(4763).pushLazy(handleModalClose5(1896)(9281, dependencyMap.paths), obj);
          if (null != onClose) {
            const handleModalClose3 = function handleModalClose() {
              if (require != null) {
                tmp();
              }
              overrideUrl(573).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose3;
            const subscription2 = tmp10(573).subscribe("MODAL_POP", handleModalClose3);
            const tmp10Result = tmp10(573);
          }
          const obj9 = overrideUrl(4763);
        } else {
          value = overrideUrl(5283).get(platformType);
          let isFederated;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            let tmp28Result = tmp28(4527);
            tmp28Result.hideActionSheet();
            tmp28Result = tmp28(4763);
            obj = { platformType, location: _location, successRedirect };
            tmp28Result.pushLazy(handleModalClose5(1896)(9283, dependencyMap.paths), obj);
            if (null != onClose) {
              const handleModalClose2 = function handleModalClose() {
                if (require != null) {
                  tmp();
                }
                overrideUrl(573).unsubscribe("MODAL_POP", handleModalClose5);
              };
              handleModalClose5 = handleModalClose2;
              const subscription3 = tmp28(573).subscribe("MODAL_POP", handleModalClose2);
              const tmp28Result1 = tmp28(573);
            }
          } else {
            if (null != overrideUrl) {
              if (platformType === closure_3) {
                let obj2 = handleModalClose5(8370);
                const obj1 = {
                  shouldConfirm: true,
                  href: overrideUrl,
                  onConfirm() {
                                  LinkingDefault.openURL(overrideUrl);
                                }
                };
                obj2.handleClick(obj1);
              }
            }
            obj2 = { location: _location, successRedirect };
            const tmp28Result2 = tmp28(5406);
            tmp28(5406).authorize(platformType, obj2).then((body) => {
              const url = body.body.url;
              if (null != url) {
                overrideUrl(4255).openURL(url);
                const obj = overrideUrl(4255);
              }
            });
            const authorizeResult = tmp28(5406).authorize(platformType, obj2);
          }
          const obj18 = overrideUrl(5283);
        }
      }
    }
    overrideUrl(4527).hideActionSheet();
    const obj13 = overrideUrl(4527);
    const tmp19 = overrideUrl;
    const items3 = [_location];
    overrideUrl(9253).showModal(items3, platformType);
    if (null != onClose) {
      handleModalClose5 = function handleModalClose() {
        if (require != null) {
          tmp();
        }
        overrideUrl(573).unsubscribe("MODAL_POP", handleModalClose5);
      };
      const subscription4 = tmp19(573).subscribe("MODAL_POP", handleModalClose5);
      const tmp19Result = tmp19(573);
    }
    const obj14 = overrideUrl(9253);
  }
};