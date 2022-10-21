import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {
	getFirestore,
	collection,
	where,
	getDocs,
	query,
	limit,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBuo-QRfwu6Zq6vqZlZKv2Fink-uo0LtFk',
	authDomain: 'socialapp-664d1.firebaseapp.com',
	projectId: 'socialapp-664d1',
	storageBucket: 'socialapp-664d1.appspot.com',
	messagingSenderId: '302067293189',
	appId: '1:302067293189:web:fb9733a58802634cc8906c',
	measurementId: 'G-QJ2ZQF8WBH',
};

// if (!firebase.apps.length) {
// 	firebase.initializeApp(firebaseConfig);
// }

function createFirebaseApp(config) {
	try {
		return getApp();
	} catch {
		return initializeApp(config);
	}
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Auth exports
// export const auth = firebase.auth();
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);
// export const firestore = firebase.firestore();
// export { firestore };
// export const serverTimestamp = serverTimestamp;
// export const fromMillis = fromMillis;
// export const increment = increment;

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';
