
import { connect } from 'react-redux'

function AuthVerify(props){return(props.navigation.navigate(props.user == undefined || props.user == null ? 'login' : 'App'))}

const mapStateToProps=(state)=>{return{user:state.reducer.user}}

export default connect(mapStateToProps)(AuthVerify)