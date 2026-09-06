// === Module 10644: ? ===

// Module 10644
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getDeviceMediaPhotosDefault from "getDeviceMediaPhotos" /* 10645 */;
import keys from "keys" /* 560 */;

const AnalyticEvents = ME.AnalyticEvents;
let closure_4 = keys.create(() => ({ assets: null, page: 0, hasReachedEnd: false, lastAssetIndex: 0 }));
const result = set.fileFinishedImporting("modules/device/native/DeviceMedia.tsx");

export default {
  getNextAssetPage(arg0) {
    let assets;
    let lastAssetIndex;
    dependencyMap = undefined;
    ({ batchSize, extensions } = arg0);
    state = state.getState();
    assets = state.assets;
    lastAssetIndex = state.lastAssetIndex;
    if (null != assets) {
      if (!state.hasReachedEnd) {
        if (assets.edges[assets.edges.length - 1] != null) {
          const node = tmp4.node;
          if (node != null) {
            const image = node.image;
          }
        }
        let obj = assets(1115);
        if (!obj.isIOS()) {
          dependencyMap = tmp2 + 1;
          obj = { batchSize: null, endCursor: null, lastAssetIndex: null, lastNodeImageUri: null, extensions: null, onFetched: null };
          obj[0] = batchSize;
          obj[1] = tmp3;
          obj[2] = lastAssetIndex;
          obj[3] = image.uri;
          obj[4] = extensions;
          obj[5] = function onFetched(edges) {
            closure_0 = edges;
            let num;
            if (edges != null) {
              edges = edges.edges;
              if (edges != null) {
                num = edges.length;
              }
            }
            if (num == null) {
              num = 0;
            }
            closure_1 = closure_1 + num;
            if (null != closure_0) {
              if (edges != null) {
                const edges1 = edges.edges;
                if (edges1 != null) {
                  const unshift = edges1.unshift;
                  const items = [];
                  HermesBuiltin.arraySpread(tmp2.edges, 0);
                  HermesBuiltin.apply(items, edges1);
                }
              }
            }
            let obj = assets(table[3]);
            obj.batchUpdates(() => {
              const obj = { assets: edges, page: closure_2, lastAssetIndex: closure_1, endCursor: null };
              let end_cursor;
              if (edges != null) {
                const page_info = edges.page_info;
                if (page_info != null) {
                  end_cursor = page_info.end_cursor;
                }
              }
              obj[3] = end_cursor;
              closure_2_4.setState(obj);
            });
            let tmp12 = null == edges;
            if (!tmp12) {
              tmp12 = 0 === edges.edges.length;
            }
            if (!tmp12) {
              let page_info = edges.page_info;
              let has_next_page;
              if (page_info != null) {
                has_next_page = page_info.has_next_page;
              }
              tmp12 = false === has_next_page;
            }
            table = tmp12;
            if (tmp12) {
              assets(tmp10[3]).batchUpdates(() => closure_2_4.setState({ hasReachedEnd: closure_2 }));
              const tmp9Result = assets(tmp10[3]);
            }
            obj = { page: table, has_reached_end: tmp12 };
            lastAssetIndex(table[2]).track(closure_1_3.MEDIA_PICKER_INFINITE_SCROLL_PAGED, obj);
          };
          lastAssetIndex(10645)(obj);
        }
      }
    }
  },
  refreshAssets(batchSize) {
    batchSize = batchSize.batchSize;
    getDeviceMediaPhotosDefault({
      batchSize,
      extensions: batchSize.extensions,
      onFetched(edges) {
        closure_0 = edges;
        let num;
        if (edges != null) {
          edges = edges.edges;
          num = edges.filter((node) => {
            let uri;
            if (node != null) {
              node = node.node;
              if (node != null) {
                const image = node.image;
                if (image != null) {
                  uri = image.uri;
                }
              }
            }
            let tmp2 = null == uri;
            if (!tmp2) {
              let uri1;
              if (node != null) {
                const node2 = node.node;
                if (node2 != null) {
                  const image2 = node2.image;
                  if (image2 != null) {
                    uri1 = image2.uri;
                  }
                }
              }
              tmp2 = "" === uri1;
            }
            return tmp2;
          }).length;
        }
        if (num == null) {
          num = 0;
        }
        if (num > 0) {
          let obj = closure_1_1(closure_1_2[2]);
          obj = { num_broken_assets: null, num_assets: null, location: "DeviceMedia.applyStateUpdate" };
          obj[0] = num;
          let length;
          if (edges != null) {
            const edges1 = edges.edges;
            if (edges1 != null) {
              length = edges1.length;
            }
          }
          obj[1] = length;
          obj.track(closure_1_3.MEDIA_PICKER_ASSETS_DEBUG, obj);
        }
        batchSize(closure_1_2[3]).batchUpdates(() => {
          const obj = { assets: closure_0, page: 0, lastAssetIndex: closure_0, endCursor: null, hasReachedEnd: null };
          let end_cursor;
          if (closure_0 != null) {
            const page_info = tmp2.page_info;
            if (page_info != null) {
              end_cursor = page_info.end_cursor;
            }
          }
          obj[3] = end_cursor;
          let num;
          if (closure_0 != null) {
            const page_info2 = tmp2.page_info;
            if (page_info2 != null) {
              num = page_info2.has_next_page;
            }
          }
          if (num == null) {
            num = 1;
          }
          obj[4] = !num;
          closure_2_4.setState(obj);
        });
      }
    });
  },
  useAssets() {
    return state((assets) => assets.assets);
  },
  useHasReachedEnd() {
    return state((hasReachedEnd) => hasReachedEnd.hasReachedEnd);
  }
};