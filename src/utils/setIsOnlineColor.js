function setIsOnlineColor(status) {
  const onlineColor = 'lightgreen';
  const offlineColor = 'tomato';
  if (!status.online) {
    return offlineColor;
  }
  return onlineColor;
}

export default setIsOnlineColor;
