import React from 'react';
import { Button, ListGroup, Tab, Modal } from 'react-bootstrap';
import welcome from './Welcome BW/welcome bw.svg';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import ListWords from './ListWords.js'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

function Home() {
	const [modalShow, setModalShow] = React.useState(true);

	return (
		<>
			{/* <Button variant="primary" onClick={() => setModalShow(true)}>
					Launch vertically centered modal
				</Button> */}

			<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />

			<div className="container">
				<div className="row profile">
					<div className="col-md-3">
						<div className="profile-sidebar">
							{/* SIDEBAR USERPIC */}
							<div className="profile-userpic">
								<img src={logo} className="img-responsive" alt=""></img>
							</div>
							{/* SIDEBAR USERTITLE */}
							<div className="profile-usertitle">
								<div className="profile-usertitle-name">Username</div>
								<div className="profile-usertitle-job">bio</div>
							</div>
							{/* <!-- END SIDEBAR USER TITLE --> */}
							{/* <!-- SIDEBAR BUTTONS --> */}
							<div className="profile-userbuttons">
								<button type="button" className="btn btn-success btn-sm">
									Do something
								</button>
							</div>
							{/* <!-- END SIDEBAR BUTTONS --> */}
							{/* <!-- SIDEBAR MENU --> */}
							<div className="profile-usermenu">
								<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
									<ListGroup>
										<ListGroup.Item action href="#link1">
											Overview
										</ListGroup.Item>
										<ListGroup.Item action href="#link2">
											Settings
										</ListGroup.Item>
									</ListGroup>
								</Tab.Container>
							</div>
							{/* <!-- END MENU --> */}
						</div>
					</div>
					<div className="col-md-9">
						<div className="profile-content">
                            <Twit/>
                        </div>
					</div>
				</div>
			</div>
		</>
	);
}

class Twit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            words : [],
            currentWord : {
                text : '',
                key : ''
            }
        }
        this.addWord = this.addWord.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteWord = this.deleteWord.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }

    addWord(e){
        e.preventDefault();
        const newWord = this.state.currentWord;
        if(newWord.text !== ""){
            const words = [...this.state.words, newWord];
            this.setState({
                words:words,
                currentWord:{
                    text:'',
                    key:''
                }
            })
        }
    }

    handleInput(e){
        this.setState({
            currentWord:{
                text : e.target.value,
                key : Date.now()
            }
        })
    }

    deleteWord(key){
        const filteredWords=this.state.words.filter(word => 
            word.key!==key);
            this.setState({
                words:filteredWords
            })
    }

    setUpdate(text,key){
        console.log("words:"+this.state.words);
        const words = this.state.words;
        words.map(word=>{
            if(word.key===key){
                console.log(word.key + " "+key)
                word.text=text;
            }
            return null
        })
        this.setState({
            words:words
        })
    }

    render(){
        return (
            <div className="container">
            <div className="card">
                <div className="card-header">
                <form className="flex-row" id="twitform" onSubmit={this.addWord}>
                    <input className="rounded" type="text" placeholder="say your thoughts" value={this.state.currentWord.text} onChange={this.handleInput}>
                    </input>
                    <button type="submit">say</button>
                </form>
                </div>
                
            </div>
            <p>{this.state.words.text}</p>
                <ListWords words={this.state.words} deleteWord={this.deleteWord} setUpdate={this.setUpdate}/>
            </div>
        )
    }
}

function MyVerticallyCenteredModal(props) {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body>
				<div className="App-header">
					<img src={welcome} className="Home-logo" alt="logo" />
					{/* <Lottie options={defaultOptions} height={400} width={400} /> */}
					<h1> Welcome !!! </h1>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default Home;
