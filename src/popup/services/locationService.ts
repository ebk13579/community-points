import subRedditMap from 'subRedditMap';

export function getCurrentSubReddit (): Promise<{ token: string, subReddit: string }> {
  return new Promise((resolve, _) => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const url = tabs[0].url;
      const subReddit = url.match(/www.reddit.com\/r\/(.*?)\//);
      if (!subReddit) {
        return resolve(null);
      }
      const token = subRedditMap[subReddit[1]];
      if (!token) {
        return resolve(null);
      }
      return resolve({
        token,
        subReddit: subReddit[1]
      });
    });
  });
}
