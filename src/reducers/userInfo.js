const emptyUser = {
  name: 'Harry',
  username: '',
	location:'',
	friends: [],
  pastRides: [
    {
      id: 1,
      date: 'May 22',
      trail: 'White Ranch Trail',
      location: 'Golden, CO',
      friends: ['Tyler', 'Jeff', 'Doug']
    }
  ],
	upcomingRides: []
}


export const userInfo = (state = emptyUser, action) => {
  switch (action.type) {
    case 'LOGIN':
      return state = action.userInfo;
    case 'LOGOUT':
      return state = emptyUser;
    case 'PLAN_RIDE':
      const updatedRides = [...state.upcomingRides, action.ride]
      state.upcomingRides = updatedRides
      console.log(state);
      return state = state;
    default:
      return state
  }
}
