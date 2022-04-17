
import { useAutoConnect } from 'contexts/auto-connect-context';

// TODO: not used for now
const AutoConnectSwitch = () => {
  const {
    autoConnect,
    setAutoConnect
  } = useAutoConnect();

  const handleAutoConnectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAutoConnect(event.currentTarget.checked);
  };

  // TODO: should improve UI/UX
  return (
    // TODO: should add tooltip like "Only runs if the wallet is ready to connect".
    <input
      type='checkbox'
      checked={autoConnect}
      onChange={handleAutoConnectChange} />
  );
};

export default AutoConnectSwitch;
