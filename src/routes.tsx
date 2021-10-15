import { Switch, Route } from 'react-router-dom';

import { SignIn } from './Pages/SignIn';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
};

export default Routes;
