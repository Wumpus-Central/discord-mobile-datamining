// === Module 9284: authorizeConnection ===

// Module 9284 (authorizeConnection)
import Constants from "Constants" /* 1074 */;
import LinkingDefault from "Linking" /* 4268 */;
import Constants2 from "Constants" /* 5422 */;
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
    overrideUrl(4541).hideActionSheet();
    const obj15 = overrideUrl(4541);
    const tmp23 = overrideUrl;
    const items = [_location];
    overrideUrl(9249).showModal(items);
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
    const obj16 = overrideUrl(9249);
  } else {
    if (platformType !== PlatformTypes.PLAYSTATION) {
      if (platformType !== PlatformTypes.PLAYSTATION_STAGING) {
        if (platformType === PlatformTypes.CRUNCHYROLL) {
          overrideUrl(4541).hideActionSheet();
          const obj11 = overrideUrl(4541);
          const tmp15 = overrideUrl;
          const items1 = [_location];
          overrideUrl(9302).showModal(items1);
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
          const obj12 = overrideUrl(9302);
        } else if (platformType === PlatformTypes.DOMAIN) {
          overrideUrl(4541).hideActionSheet();
          const obj8 = overrideUrl(4541);
          const tmp10 = overrideUrl;
          let obj = { locationStack: null };
          const items2 = [_location];
          obj.locationStack = items2;
          overrideUrl(4777).pushLazy(handleModalClose5(1896)(9313, dependencyMap.paths), obj);
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
          const obj9 = overrideUrl(4777);
        } else {
          value = overrideUrl(5297).get(platformType);
          let isFederated;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            let tmp28Result = tmp28(4541);
            tmp28Result.hideActionSheet();
            tmp28Result = tmp28(4777);
            obj = { platformType, location: _location, successRedirect };
            tmp28Result.pushLazy(handleModalClose5(1896)(9315, dependencyMap.paths), obj);
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
                let obj2 = handleModalClose5(8398);
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
            const tmp28Result2 = tmp28(5420);
            tmp28(5420).authorize(platformType, obj2).then((body) => {
              const url = body.body.url;
              if (null != url) {
                overrideUrl(4268).openURL(url);
                const obj = overrideUrl(4268);
              }
            });
            const authorizeResult = tmp28(5420).authorize(platformType, obj2);
          }
          const obj18 = overrideUrl(5297);
        }
      }
    }
    overrideUrl(4541).hideActionSheet();
    const obj13 = overrideUrl(4541);
    const tmp19 = overrideUrl;
    const items3 = [_location];
    overrideUrl(9285).showModal(items3, platformType);
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
    const obj14 = overrideUrl(9285);
  }
};