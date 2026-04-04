import {
  hostContractProps,
  HostContractProvider,
  useHostContractContext
} from '@app/contexts';
import { Component } from 'solid-js';
import './index.css';

const AppCore: Component = () => {
  const { description, heading } = useHostContractContext();

  return (
    <div class="text-[#555555]">
      <h1>{heading()}</h1>
      <p>{description()}</p>
    </div>
  );
};

const App: Component<Partial<typeof hostContractProps>> = props => (
  <HostContractProvider {...props}>
    <AppCore />
  </HostContractProvider>
);

export default App;
