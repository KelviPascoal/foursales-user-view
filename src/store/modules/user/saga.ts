import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOAD_USERS_REQUEST,
    loadUsersSuccess,
    loadUsersFailure,
} from './actions';
import { SagaIterator } from 'redux-saga';
import { API_URL } from '../../../constants/env';

export function* loadUsersSaga(): SagaIterator {
    try {
        const response = yield call(
            axios.get,
            String(API_URL)
        );

        yield put(loadUsersSuccess(response.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        yield put(loadUsersFailure(error.message));
    }
}

export function* usersSaga() {
    yield takeLatest(LOAD_USERS_REQUEST, loadUsersSaga);
}
