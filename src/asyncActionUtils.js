// 이 함수는 파라미터로 액션의 타입(ex: GET_USER)과 Promise를 만들어주는 함수를 받아옴
export default function createAsyncDispatcher(type, promiseFn) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  // ...rest로 남은 파라미터 담음
  
}