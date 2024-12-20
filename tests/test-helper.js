import Application from 'super-rentals/app';
import config from 'super-rentals/config/environment';
import QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { loadTests } from 'ember-qunit/test-loader';
import { start, setupEmberOnerrorValidation } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

setupEmberOnerrorValidation();
loadTests();
start();
