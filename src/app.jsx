import styles from './index.scss';
import React from 'react';
import Helmet from "react-helmet";
import _ from 'lodash';
import Slider from 'react-slick';
//import DDP from 'ddp.js';



var SimpleSlider = React.createClass({
	render: function () {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 1,
			nextArrow: <img src={require ('./photos/Arrow_R.png')}/>,
			prevArrow: <img src={require ('./photos/Arrow_L.png')}/>,
		};
		const images = this.props.images;
		const prefix = this.props.id;
		return (
			<Slider {...settings}>
				{images && images.map((src)=> {
					const id = _.uniqueId(prefix)
					return <div key={id}><img src={src}/></div>
				})}
			</Slider>
		);
	}
});

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			regForm: {
				hovaten: '',
				sodienthoai: '',
				email: '',
				thamdutai: '',
				nguoidangkyla: '',
				thanhphodangsong: '',
				duhoctai: [],
				thoigianduhoc: '',
				nhucauhoc: '',
				bietchuongtrinhquakenh: []
			}
		};
		this._handle_Duhoctai = this._handle_Duhoctai.bind(this);
		this._handle_Bietchuongtrinhquakenh = this._handle_Bietchuongtrinhquakenh.bind(this);
		this._sendForm = this._sendForm.bind(this);
		this._handleChange = this._handleChange.bind(this);
		this.slider1 = [
			require('./photos/schools-1/Abbey2.png'),
			require('./photos/schools-1/BlueMoutains2.png'),
			require('./photos/schools-1/Chase-Grammar-School2.png'),
			require('./photos/schools-1/Dimension2.png'),
			require('./photos/schools-1/JCU2.png'),
			require('./photos/schools-1/Knox-School2.png'),
			require('./photos/schools-1/Le_Cordon_Bleu2.png'),
			require('./photos/schools-1/St-Paul-International-College2.png'),
			require('./photos/schools-1/The-Oxford-International-Group2.png'),
			require('./photos/schools-1/Toronto2.png'),
		];
		this.slider2 = [
			require('./photos/Study Group/Bellerbys-College.png'),
			require('./photos/Study Group/James-Madison.png'),
			require('./photos/Study Group/Lancaster-University.png'),
			require('./photos/Study Group/LongIsland-University.png'),
			require('./photos/Study Group/Maine.png'),
			require('./photos/Study Group/roosevelt.png'),
			require('./photos/Study Group/Taylors-College.png'),
			require('./photos/Study Group/The-University-of-Vermont.png'),
			require('./photos/Study Group/University-of-Huddersfield.png'),
			require('./photos/Study Group/University-of-Leicerter.png'),
			require('./photos/Study Group/University-of-Sussex.png'),
			require('./photos/Study Group/Widener-University.png'),
		];
		this.slider3 = [
			require('./photos/Kings/canisius-college.png'),
			require('./photos/Kings/Kings.png'),
			require('./photos/Kings/Kings.png'),
			require('./photos/Kings/Kings.png'),
			require('./photos/Kings/Kings.png'),
			require('./photos/Kings/Kings-New-York.png'),
			require('./photos/Kings/Kings.png'),
			require('./photos/Kings/Kings.png'),
			require('./photos/Kings/Marymount-California-University.png'),
			require('./photos/Kings/Rider-University.png'),
			require('./photos/Kings/University-of-Southern-California.png'),
		];
		this.slider4 = [
			require('./photos/Kaplan/Birminghamuniversity.png'),
			require('./photos/Kaplan/City-University-London.png'),
			require('./photos/Kaplan/Merrimack-college.png'),
			require('./photos/Kaplan/Northeastern-University.png'),
			require('./photos/Kaplan/Pace-University.png'),
			require('./photos/Kaplan/Quinniplac-University.png'),
			require('./photos/Kaplan/University-of-Liverpool.png'),
			require('./photos/Kaplan/University-of-Nottingham.png'),
			require('./photos/Kaplan/University-of-York.png'),
		]
	}

	_isFormValid() {
		let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return (this.state.hovaten && regEmail.test(this.state.email) && this.state.sodienthoai && this.state.thamdutai && this.state.duhoctai && this.state.nguoidangkyla && this.state.thanhphodangsong && this.state.thoigianduhoc && this.state.nhucauhoc && this.state.duhoctai.length > 0 && this.state.bietchuongtrinhquakenh.length > 0);
	}

	_sendForm(e) {
		e.preventDefault();
	}

	_handleChange = (key) => ({
		value: this.state.regForm[key],
		onChange: e => {
			const form = _.extend(this.state.regForm, {[key]: e.target.value});
			this.setState({"regForm" : form})
		}
	});

	_handle_Duhoctai(e) {
		this.setState({
			duhoctai: $(e.target).selectpicker('val')
		})
	}

	_handle_Bietchuongtrinhquakenh(e) {
		this.setState({
			bietchuongtrinhquakenh: $(e.target).selectpicker('val')
		})
	}

	render() {
		return (
			<div className={`container-fluid ${styles.noPadding}`}>
				<Helmet title="Fair 09 - 2016" titleTemplate="%s | Sunrise Vietnam"
								link={[
									{rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css", integrity:"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u", crossorigin: "anonymous"},
									{rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css", integrity:"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp", crossorigin: "anonymous"},
									{rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"},
									{rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"},
								]}
								script={[
									{src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js", integrity: "sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa", crossorigin: "anonymous", type: "text/javascript"}
								]}
					/>
				{/*menu*/}
				<nav className={`navbar navbar-fixed-top ${styles.navBarCustom}`}>
					<div className="container">
						<div className="container-fluid">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
												data-target="#top-menu" aria-expanded="false">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>
							<div className={`collapse navbar-collapse text-center ${styles.centerMenu}`} id="top-menu">
								<ul className="nav navbar-nav">
									<li><a href="#" className={styles.customA}>TRANG CHỦ</a></li>
									<li><a href="#opportunities" className={styles.customA}>CƠ HỘI TẠI TRIỂN LÃM</a></li>
									<li><a href="#gifts" className={styles.customA}>QUÀ TẶNG</a></li>
									<li><a href="#sharing" className={styles.customA}>DU HỌC SINH CHIA SẺ</a></li>
									<li><a href="#schools" className={styles.customA}>CÁC TRƯỜNG TỔ CHỨC THAM GIA TRIỂN LÃM</a></li>
								</ul>
								<ul className="nav navbar-nav navbar-right">
									<li><a href="#schools"><img className="visible-lg visible-md" height="70" src={require ('./photos/logo.png')}/></a></li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
				{/*banner*/}
				<div className={`${styles.banner}`}>
					<img src={require ('./photos/cover.png')} width="100%"/>
				</div>
				{/*places*/}
				<div className="container">
					<div className="col-xs-12 col-md-8 col-md-offset-2 text-center">
						<div className={styles.mediumSpacing}></div>
						<img src={require ('./photos/title-places.png')} className={styles.imgResponsive}/>
						<div className={styles.smallSpacing}></div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<ul className="media-list">
							<li className="media">
								<div className="media-left media-top">
									<p className={styles.iconPlaces}></p>
								</div>
								<div className="media-body">
									<h4 className="media-heading text-uppercase"><strong className={`${styles.dblue}`}><em>* TP.HCM</em></strong></h4>
								</div>
							</li>
							<li className={`media ${styles.customMedia}`}>
								<div className="media-left media-top">
									<img src={require ('./photos/time.png')} className={styles.iconPlaces}/>
								</div>
								<div className="media-body">
									<h5 className="media-heading text-uppercase"><strong>THỨ 6, TỪ 16 GIỜ - 20 GIỜ</strong><br/>
										Ngày 30/09/2016</h5>
								</div>
							</li>
							<li className={`media ${styles.customMedia}`}>
								<div className="media-left media-top">
									<img src={require ('./photos/place.png')} className={styles.iconPlaces}/>
								</div>
								<div className="media-body">
									<h5 className="media-heading text-uppercase"><strong>Tại KS Liberty Central Saigon</strong><br/>
										59-61 Pasteur - Quận 1</h5>
								</div>
							</li>
						</ul>
						<div className={`visible-xs ${styles.smallSpacing}`}></div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<ul className="media-list">
							<li className="media">
								<div className="media-left media-top">
									<p className={styles.iconPlaces}></p>
								</div>
								<div className="media-body">
									<h4 className="media-heading text-uppercase"><strong className={`${styles.dblue}`}><em>* HÀ NỘI</em></strong></h4>
								</div>
							</li>
							<li className={`media ${styles.customMedia}`}>
								<div className="media-left media-top">
									<img src={require ('./photos/time.png')} className={styles.iconPlaces}/>
								</div>
								<div className="media-body">
									<h5 className="media-heading text-uppercase"><strong>Thứ 7 từ 14 giờ - 18 giờ</strong><br/>
										<span className={styles.spaceImg}></span>Ngày
										01/10/2016</h5>
								</div>
							</li>
							<li className={`media ${styles.customMedia}`}>
								<div className="media-left media-top">
									<img src={require ('./photos/place.png')} className={styles.iconPlaces}/>
								</div>
								<div className="media-body">
									<h5 className="media-heading text-uppercase"><strong>Tại Star Galaxy Convention</strong><br/>
										87 Láng Hạ - Đống Đa<br/>
										(Cạnh rạp chiếu phim Quốc gia)</h5>
								</div>
							</li>
						</ul>
						<div className={`visible-xs visible-sm ${styles.smallSpacing}`}></div>
					</div>
					<div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-0">
						<ul className="media-list">
							<li className="media">
								<div className="media-left media-top">
									<p className={styles.iconPlaces}></p>
								</div>
								<div className="media-body">
									<h4 className="media-heading text-uppercase"><strong className={`${styles.dblue}`}><em>* HẢI PHÒNG</em></strong></h4>
								</div>
							</li>
							<li className={`media ${styles.customMedia}`}>
								<div className="media-left media-top">
									<img src={require ('./photos/time.png')} className={styles.iconPlaces}/>
								</div>
								<div className="media-body">
									<h5 className="media-heading text-uppercase"><strong>Chủ nhật từ 9 giờ - 12 giờ</strong><br/>
										Ngày 02/10/2016</h5>
								</div>
							</li>
							<li className={`media ${styles.customMedia}`}>
								<div className="media-left media-top">
									<img src={require ('./photos/place.png')} className={styles.iconPlaces}/>
								</div>
								<div className="media-body">
									<h5 className="media-heading text-uppercase"><strong>Tại khách sạn Nam Cường</strong><br/>
										47 Lạch Tray</h5>
								</div>
							</li>
						</ul>
					</div>
					{/*form*/}
					<div className="row" id="registerForm">
						<div className={`col-xs-12 col-md-8 col-md-offset-2 text-center ${styles.sectionTitle}`}>
							<div className={styles.mediumSpacing}></div>
							<img src={require ('./photos/title-form.png')} className={styles.imgResponsive}/>
						</div>
					</div>
					<div className="">
						<form className="form-horizontal">
							<div className="form-group">
								<div className={`col-xs-12 col-md-4 ${styles.marginBottomXS} ${styles.marginBottomSM}`}>
									<input className={`form-control ${styles.customInput}`} type="text" placeholder="Họ và tên" {...this._handleChange('hovaten')}/>
								</div>
								<div className={`col-xs-12 col-sm-6 col-md-4 ${styles.marginBottomXS}`}>
									<input className={`form-control ${styles.customInput}`} placeholder="Số điện thoại"  {...this._handleChange('sodienthoai')}/>
								</div>
								<div className="col-xs-12 col-sm-6 col-md-4">
									<input className={`form-control ${styles.customInput}`} type="text" placeholder="Email"  {...this._handleChange('email')}/>
								</div>
							</div>
							<div className="form-group">
								<div className="col-xs-12">
									<select className={`form-control ${styles.customInput}`} {...this._handleChange('thamdutai')}>
										<option>Bạn sẽ tham dự triển lãm tại</option>
										<option value="TP HCM">Tp. Hồ Chí Minh, thứ 6 từ 16 giờ - 20 giờ, ngày 30/09/2016, tại khách sạn Liberty Central Saigon, 59-61 Pasteur - Quận 1</option>
										<option value="Hà Nội">Hà Nội, thứ 7 từ 14 giờ - 18 giờ, ngày 01/10/2016, tại Star Galaxy Convention, 87 Láng Hạ - Đống Đa </option>
										<option value="Hải Phòng">Hải Phòng, Chủ nhật từ 9 giờ - 12 giờ, ngày 02/10/2016, tại khách sạn Nam Cường, 47 Lạch Tray</option>
									</select>
								</div>
							</div>
							<div className="form-group">
								<div className={`col-xs-12 col-sm-6 col-md-4 ${styles.marginBottomXS}`}>
									<select className={`form-control ${styles.customInput}`}title="Bạn là" {...this._handleChange('nguoidangkyla')}>
										<option disabled>Bạn là</option>
										<option value="Học sinh THCS">Học sinh THCS</option>
										<option value="Học sinh THPT">Học sinh THPT</option>
										<option value="Sinh viên Đại học">Sinh viên đại học</option>
										<option value="Đã tốt nghiệp">Đã tốt nghiệp</option>
										<option value="Phụ huynh">Phụ huynh</option>
										<option value="Khác">Khác</option>
									</select>
								</div>
								<div className={`col-xs-12 col-sm-6 col-md-4 ${styles.marginBottomXS} ${styles.marginBottomSM}`}>
									<select className={`form-control ${styles.customInput}`} {...this._handleChange('thanhphodangsong')}>
										<option disabled>Nơi bạn đang sống</option>
										<option value="Hà Nội">Hà Nội</option>
										<option value="TP HCM">TP HCM</option>
										<option value="Hải Phòng">Hải Phòng</option>
										<option value="Đà Nẵng">Đà Nẵng</option>
										<option value="Cần Thơ">Cần Thơ</option>
										<option value="An Giang">An Giang</option>
										<option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
										<option value="Bắc Giang">Bắc Giang</option>
										<option value="Bắc Kạn">Bắc Kạn</option>
										<option value="Bạc Liêu">Bạc Liêu</option>
										<option value="Bắc Ninh">Bắc Ninh</option>
										<option value="Bến Tre">Bến Tre</option>
										<option value="Bình Định">Bình Định</option>
										<option value="Bình Dương">Bình Dương</option>
										<option value="Bình Phước">Bình Phước</option>
										<option value="Bình Thuận">Bình Thuận</option>
										<option value="Cà Mau">Cà Mau</option>
										<option value="Cao Bằng">Cao Bằng</option>
										<option value="Đắk Lắk">Đắk Lắk</option>
										<option value="Đắk Nông">Đắk Nông</option>
										<option value="Điện Biên">Điện Biên</option>
										<option value="Đồng Nai">Đồng Nai</option>
										<option value="Đồng Tháp">Đồng Tháp</option>
										<option value="Gia Lai">Gia Lai</option>
										<option value="Hà Giang">Hà Giang</option>
										<option value="Hà Nam">Hà Nam</option>
										<option value="Hà Tĩnh">Hà Tĩnh</option>
										<option value="Hải Dương">Hải Dương</option>
										<option value="Hậu Giang">Hậu Giang</option>
										<option value="Hòa Bình">Hòa Bình</option>
										<option value="Hưng Yên">Hưng Yên</option>
										<option value="Khánh Hòa">Khánh Hòa</option>
										<option value="Kiên Giang">Kiên Giang</option>
										<option value="Kon Tum">Kon Tum</option>
										<option value="Lai Châu">Lai Châu</option>
										<option value="Lâm Đồng">Lâm Đồng</option>
										<option value="Lạng Sơn">Lạng Sơn</option>
										<option value="Lào Cai">Lào Cai</option>
										<option value="Long An">Long An</option>
										<option value="Nam Định">Nam Định</option>
										<option value="Nghệ An">Nghệ An</option>
										<option value="Ninh Bình">Ninh Bình</option>
										<option value="Ninh Thuận">Ninh Thuận</option>
										<option value="Phú Thọ">Phú Thọ</option>
										<option value="Phú Yên">Phú Yên</option>
										<option value="Quảng Bình">Quảng Bình</option>
										<option value="Quảng Nam">Quảng Nam</option>
										<option value="Quảng Ngãi">Quảng Ngãi</option>
										<option value="Quảng Ninh">Quảng Ninh</option>
										<option value="Quảng Trị">Quảng Trị</option>
										<option value="Sóc Trăng">Sóc Trăng</option>
										<option value="Sơn La">Sơn La</option>
										<option value="Tây Ninh">Tây Ninh</option>
										<option value="Thái Bình">Thái Bình</option>
										<option value="Thái Nguyên">Thái Nguyên</option>
										<option value="Thanh Hóa">Thanh Hóa</option>
										<option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
										<option value="Tiền Giang">Tiền Giang</option>
										<option value="Trà Vinh">Trà Vinh</option>
										<option value="Tuyên Quang">Tuyên Quang</option>
										<option value="Vĩnh Long">Vĩnh Long</option>
										<option value="Vĩnh Phúc">Vĩnh Phúc</option>
										<option value="Yên Bái">Yên Bái</option>
									</select>
								</div>
								<div className={`col-xs-12 col-sm-6 col-md-4 ${styles.marginBottomXS} ${styles.marginBottomMD}`}>
									<select className={`form-control selectpicker`}
													multiple="multiple" name="duhoctai[]" title="Bạn dự định du học tại"
													data-selected-text-format="count>1" onChange={this._handle_Duhoctai}>
										<option disabled>Bạn dự định du học tại</option>
										<option value="Anh">Anh</option>
										<option value="Mỹ">Mỹ</option>
										<option value="Canada">Canada</option>
										<option value="Úc">Úc</option>
										<option value="New Zealand">New Zealand</option>
										<option value="Phần Lan">Phần Lan</option>
										<option value="Thụy Sỹ">Thụy Sỹ</option>
										<option value="Hà Lan">Hà Lan</option>
										<option value="Đức">Đức</option>
										<option value="Malaysia">Malaysia</option>
										<option value="Singapore">Singapore</option>
										<option value="Thái Lan">Thái Lan</option>
										<option value="Hàn Quốc">Hàn Quốc</option>
										<option value="Nhật Bản">Nhật Bản</option>
										<option value="Trung Quốc">Trung Quốc</option>
										<option value="Khác">Khác</option>
									</select>
								</div>

								<div className={`col-xs-12 col-sm-6 col-md-4 ${styles.marginBottomXS} ${styles.marginBottomSM}`}>
									<select className={`form-control ${styles.customInput}`}  {...this._handleChange('thoigianduhoc')}>
										<option disabled>Thời gian dự định du học</option>
										<option value="Năm 2017">Năm 2017</option>
										<option value="Năm 2018">Năm 2018</option>
									</select>
								</div>
								<div className={`col-xs-12 col-sm-6 col-md-4 ${styles.marginBottomXS}`}>
									<select className={`form-control ${styles.customInput}`}  {...this._handleChange('nhucauhoc')}>
										<option disabled>Bạn có nhu cầu học</option>
										<option value="IELTS">IELTS</option>
										<option value="TOEFL">TOEFL</option>
										<option value="SAT">SAT</option>
										<option value="GMAT">GMAT</option>
										<option value="Không">Không</option>
									</select>
								</div>
								<div className="col-xs-12 col-sm-6 col-md-4">
									<select className={`form-control selectpicker`}
													multiple="multiple" name="kenh[]" title="Bạn biết chương trình này qua"
													data-selected-text-format="count>1" onChange={this._handle_Bietchuongtrinhquakenh}>
										<option value="Facebook SunriseVietnam">Facebook SunriseVietnam</option>
										<option value="Website SunriseVietnam">Website SunriseVietnam</option>
										<option value="Truyền hình Hải Phòng">Truyền hình Hải Phòng</option>
										<option value="Email">Email</option>
										<option value="Google">Google</option>
										<option value="Băng rôn">Băng rôn</option>
										<option value="Bạn bè giới thiệu">Bạn bè giới thiệu</option>
										<option value="Dân trí">Dân trí</option>
										<option value="Zing News">Zing News</option>
										<option value="VnExpress">VnExpress</option>
										<option value="Khác">Khác</option>
									</select>
								</div>

								<div className="col-xs-12">
									<div className={styles.smallSpacing}></div>
									<button className={`${styles.btnBlock}`} id={`${styles.btnRegister}`} type="button" onClick={this._sendForm}><h4>ĐĂNG KÝ</h4></button>
								</div>
							</div>
						</form>
					</div>
				</div>
				{/*opportunities*/}
				<a id="opportunities"><div className={styles.mediumSpacing}></div></a>
				<div className={`${styles.opportunities}`}>
						<div className="container">
							<div className={`col-xs-12 col-md-8 col-md-offset-2 ${styles.sectionTitle}`}>
								<div className={styles.mediumSpacing}></div>
								<img src={require ('./photos/title-opp.png')} className={styles.imgResponsive}/>
							</div>
							<div className="col-xs-12 col-sm-6">
								<div className="row">
									<div className="col-xs-4 col-xs-offset-4 col-sm-3 col-sm-offset-0 col-md-2 col-md-offset-2 text-right">
										<img src={require ('./photos/woman.png')} className={styles.imgResponsive}/>
										<div className={`visible-xs ${styles.smallSpacing}`}></div>
									</div>
									<div className="col-xs-12 col-sm-9 col-md-8">
										<h4><strong>TƯ VẤN TỔNG QUAN:</strong></h4>

										<h5><strong>Trả lời câu hỏi du học</strong></h5>
										<h5><strong>Luyện thi IELTS/TOEFL từ A đến Z</strong></h5>
										<div className={`visible-xs ${styles.mediumSpacing}`}></div>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-6">
								<div className="row">
									<div className="col-xs-4 col-xs-offset-4 col-sm-3 col-sm-offset-0 col-md-2 col-md-offset-2 text-right">
										<img src={require ('./photos/man.png')} className={styles.imgResponsive}/>
										<div className={`visible-xs ${styles.smallSpacing}`}></div>
									</div>
									<div className="col-xs-12 col-sm-9 col-md-8">
										<h4><strong>TƯ VẤN CHUYÊN SÂU:</strong></h4>
										<h5><strong>Gặp trực tiếp đại diện trường,</strong></h5>
										<h5><strong>nhận quà tại quầy trường</strong></h5>
									</div>
								</div>
							</div>
							<div className="col-xs-12">
								<div className="row">
									<div className={styles.mediumSpacing}></div>
									<div className="col-xs-4 col-xs-offset-4 col-sm-2 col-sm-offset-1 col-md-1 col-md-offset-3 text-right">
										<img src={require ('./photos/schoolships.png')} className={styles.imgResponsive}/>
										<div className={`visible-xs ${styles.smallSpacing}`}></div>
									</div>
									<div className="col-xs-12 col-sm-9 col-md-8">
										<h4><strong>HỌC BỔNG TẠI CHỖ:</strong></h4>
										<h5><strong>Phỏng vấn học bổng các bậc học, thi thử IELTS Speaking,</strong></h5>
										<h5><strong>Phỏng vấn thử visa Mỹ như thế nào nhỉ?</strong></h5>
									</div>
								</div>
								<a id="gifts"><div className={styles.mediumSpacing}></div></a>
							</div>
						</div>
				</div>
				{/*----------------------gifts----------------------*/}
				<div className={styles.smallSpacing}></div>
				<div className="container">
					<div className={`col-xs-12 col-md-8 col-md-offset-2 text-center ${styles.sectionTitle}`}>
						<img src={require('./photos/title-gifts.png')} className={styles.imgResponsive}/>
					</div>
					<div className="col-xs-8 col-xs-offset-2 col-sm-3 col-md-2 col-md-offset-1">
						<img src={require('./photos/tui-but-moc-khoa.png')} className={styles.imgResponsive}/>
						<div className={styles.smallSpacing}></div>
						<h5 className="text-center"><strong>TÚI, SỔ,<br className="visible-lg"/> BÚT, MÓC KHÓA</strong></h5>
						<div className={`visible-xs ${styles.mediumSpacing}`}></div>
					</div>
					<div className="col-xs-8 col-xs-offset-2 col-sm-3 col-md-2 col-md-offset-2">
						<img src={require('./photos/cam-nang.png')} className={styles.imgResponsive}/>
						<div className={styles.smallSpacing}></div>
						<h5 className="text-center"><strong>CẨM NANG DU HỌC</strong></h5>
						<div className={`visible-xs ${styles.mediumSpacing}`}></div>
					</div>
					<div className="col-xs-8 col-xs-offset-2 col-sm-3 col-sm-offset-4 col-md-2 col-md-offset-2">
						<img src={require('./photos/IELTS.png')} className={styles.imgResponsive}/>
						<div className={styles.smallSpacing}></div>
						<h5 className="text-center"><strong>BỐC THĂM HỖ TRỢ<br className="visible-lg"/> LỆ PHÍ THI IELTS</strong></h5>
					</div>
				</div>
				{/*sharing*/}
				<a id="sharing"><div className={styles.largeSpacing}></div></a>
				<div className={`${styles.grayBg}`}>
						<div className="container">
							<div className={`col-xs-12 col-md-8 col-md-offset-2 text-center ${styles.sectionTitle}`}>
								<div className={styles.smallSpacing}></div>
								<img src={require('./photos/title-sharing.png')} className={styles.imgResponsive}/>
							</div>
							<div className="col-xs-12">
								<div className="row">
									<div className={`col-xs-12 visible-xs visible-sm ${styles.noPadding}`}>
										<img src={require('./photos/nguyen-minh-tuan.png')} className={styles.imgResponsive}/>
									</div>
									<div className="col-xs-12 col-md-6 col-lg-5 col-lg-offset-1">
										<div className={`visible-lg ${styles.largeSpacing}`}></div>
										<div className={`visible-xs visible-sm ${styles.smallSpacing}`}></div>
										<h4><strong>DU HỌC SINH TẠI MỸ</strong></h4>
										<h5 className="text-justify">Cuối cùng mình muốn nói là chuyến đi này là chuyến đi dài nhất và tốn
											kém nhất mình từng tham gia nên mình phảo tận dụng hết quỹ thời gian có thể để vừa học hỏi kiến
											thức vừa có thể thoả ước mơ đi du lịch của mình nữa. Các bạn trẻ có niềm đam mê du lịch hãy điền
											tên vào một chuyến đi dài ngày như mình xem sao, sẽ có rất nhiều điều hay ho phía trước đấy.</h5>
										<div className={`visible-xs visible-sm ${styles.mediumSpacing}`}></div>
									</div>
									<div className={`hidden-xs hidden-sm col-md-6 col-lg-5 ${styles.noPadding}`}>
										<img src={require('./photos/nguyen-minh-tuan.png')} className={styles.imgResponsive}/>
									</div>
								</div>
							</div>
							<div className="col-xs-12">
								<div className="row">
									<div className={`col-xs-12 col-md-6 col-lg-5 col-lg-offset-1 ${styles.noPadding}`}>
										<img src={require('./photos/dang-dieu-linh.png')} className={styles.imgResponsive}/>
									</div>
									<div className="col-xs-12 col-md-6 col-lg-5">
										<div className={`visible-lg ${styles.largeSpacing}`}></div>
										<div className={`visible-xs visible-sm ${styles.smallSpacing}`}></div>
										<h4><strong>DU HỌC SINH TẠI ANH</strong></h4>
										<h5 className="text-justify">Theo mình, "Du học" là một chuyến đi mà bạn sẽ được trang bị kiến thức, gặp gỡ người mới để mở
											mang tầm mắt. Nó còn là cơ hội để bạn trải nghiệm cuộc sống tự lập, học hỏi nhiều điều mới và thử
											thách khả năng của bản thân. </h5>
									</div>
								</div>
							</div>
						</div>
					<a id="schools"><div className={styles.largeSpacing}></div></a>
				</div>

				{/*----------------------schools----------------------*/}
				<div className={styles.schoolsContainer}>
					<div className="container">
						<div className="col-xs-12 col-md-8 col-md-offset-2 text-center">
							<div className={styles.mediumSpacing}></div>
							<img src={require('./photos/title-schools.png')} className={styles.imgResponsive}/>
							<div className={styles.mediumSpacing}></div>
						</div>
						<div className={`col-xs-12 text-center ${styles.schoolsGroup}`}>
							<h4><strong>ĐẠI DIỆN CÁC TRƯỜNG TRUNG HỌC, CAO ĐẲNG, ĐẠI HỌC<br/>
							TẠI ANH, ÚC, CANADA, MỸ, TRUNG QUỐC, SINGAPORE</strong></h4>
							<div className={styles.mediumSpacing}></div>
							<SimpleSlider images={this.slider1} id='slider1_'/>
							<div className={styles.largeSpacing}></div>
						</div>
						<div className={`col-xs-12 text-center ${styles.schoolsGroup}`}>
							<h4><strong>TỔ CHỨC GIÁO DỤC STUDY GROUP<br/>
								ĐẠI DIỆN TRƯỜNG TRUNG HỌC, ĐẠI HỌC<br/>
								TẠI ANH, ÚC, MỸ, HÀ LAN, CANADA, NEW ZEALAND</strong></h4>
							<div className={styles.mediumSpacing}></div>
							<SimpleSlider images={this.slider2} id='slider2_'/>
							<div className={styles.largeSpacing}></div>
						</div>
						<div className={`col-xs-12 text-center ${styles.schoolsGroup}`}>
							<h4><strong>TỔ CHỨC GIÁO DỤC KINGS EDUCATION<br/>
							ĐẠI DIỆN TRƯỜNG TRUNG HỌC, ĐẠI HỌC<br/>
							TẠI ANH, MỸ</strong></h4>
							<div className={styles.mediumSpacing}></div>
							<SimpleSlider images={this.slider3} id='slider3_'/>
							<div className={styles.largeSpacing}></div>
						</div>
						<div className={`col-xs-12 text-center ${styles.schoolsGroup}`}>
							<h4><strong>TỔ CHỨC GIÁO DỤC KAPLAN<br/>
								ĐẠI DIỆN TRƯỜNG TRUNG HỌC, ĐẠI HỌC<br/>
								TẠI ANH, ÚC, MỸ, IRELAND</strong></h4>
							<div className={styles.mediumSpacing}></div>
							<SimpleSlider images={this.slider4} id='slider4_'/>
							<div className={styles.largeSpacing}></div>
						</div>
						<div className="col-xs-12 text-center">
							<button className={`${styles.btnBlock}`} id={`${styles.btnToForm}`} href="#registerForm" type="button"><h4>ĐĂNG KÝ</h4></button>
							<div className={styles.mediumSpacing}></div>
						</div>
					</div>
				</div>
				{/*button*/}
				{/*footer*/}
				<div className={styles.footer}>
					<div className="container">
						<div className={styles.smallSpacing}></div>
						<div className="col-xs-12">
							<h3 className="text-center"><strong>MỌI CHI TIẾT XIN LIÊN HỆ</strong></h3>
							<div className={styles.smallSpacing}></div>
						</div>

						<div className="col-xs-12 col-sm-6 col-md-3">
							<p><strong className={styles.orange}>HÀ NỘI:</strong><br/></p>
							<ul className="media-list">
								<li className="media">
									<div className="media-left media-top">
											<img className="media-object" src={require ('./photos/place1.png')}/>
									</div>
									<div className="media-body">
										<p className="media-heading">86 CỬA BẮC, Q. BA ĐÌNH</p>
									</div>
								</li>
								<li className={`media ${styles.customMedia}`}>
									<div className="media-left media-top">
										<a href="#">
											<img className="media-object" width="16px" src={require ('./photos/phone.png')}/>
										</a>
									</div>
									<div className="media-body">
										<p className="media-heading">043.722.4898</p>
									</div>
								</li>
							</ul>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3">
							<p><strong className={styles.orange}>TIMES CITY:</strong><br/></p>
							<ul className="media-list">
								<li className="media">
									<div className="media-left media-top">
										<img className="media-object" src={require ('./photos/place1.png')}/>
									</div>
									<div className="media-body">
										<p className="media-heading">TẦNG 2, TOÀ NHÀ T5,<br/>
											KHU VĂN PHÒNG TIMES CITY<br/>
											458 MINH KHAI, Q. HAI BÀ TRƯNG, HÀ NỘI</p>
									</div>
								</li>
								<li className={`media ${styles.customMedia}`}>
									<div className="media-left media-top">
										<a href="#">
											<img className="media-object" width="16px" src={require ('./photos/phone.png')}/>
										</a>
									</div>
									<div className="media-body">
										<p className="media-heading">043.200.4743 * 043.204.8333</p>
									</div>
								</li>
							</ul>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3">
							<p><strong className={styles.orange}>HỒ CHÍ MINH:</strong><br/></p>
							<ul className="media-list">
								<li className="media">
									<div className="media-left media-top">
										<img className="media-object" src={require ('./photos/place1.png')}/>
									</div>
									<div className="media-body">
										<p className="media-heading">LẦU 7, TOÀ NHÀ THANH DUNG,<br/>
											179 NGUYỄN CƯ TRINH, QUẬN 1</p>
									</div>
								</li>
								<li className={`media ${styles.customMedia}`}>
									<div className="media-left media-top">
										<a href="#">
											<img className="media-object" width="16px" src={require ('./photos/phone.png')}/>
										</a>
									</div>
									<div className="media-body">
										<p className="media-heading">083.837.0226</p>
									</div>
								</li>
							</ul>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3">
							<p><strong className={styles.orange}>HẢI PHÒNG:</strong><br/></p>
							<ul className="media-list">
								<li className="media">
									<div className="media-left media-top">
										<img className="media-object" src={require ('./photos/place1.png')}/>
									</div>
									<div className="media-body">
										<p className="media-heading">29 NGUYỄN TRÃI, NGÔ QUYỀN</p>
									</div>
								</li>
								<li className={`media ${styles.customMedia}`}>
									<div className="media-left media-top">
										<a href="#">
											<img className="media-object" width="16px" src={require ('./photos/phone.png')}/>
										</a>
									</div>
									<div className="media-body">
										<p className="media-heading">031.365.3269</p>
									</div>
								</li>
							</ul>
						</div>
						<div className="col-xs-12 text-center">
							<div className={styles.smallSpacing}></div>
							<p>
								<span className={styles.lblue}>WEB:</span> SUNRISEVIETNAM.COM
								<span className="hidden-xs hidden-sm">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span><br className="hidden-md hidden-lg"/>
								<span className={styles.lblue}>EMAIL:</span> INFO@SUNRISEVIETNAM.COM<span className="hidden-xs hidden-sm">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span><br className="hidden-md hidden-lg"/>
								<span className={styles.lblue}>FACEBOOK:</span> WWW.FACEBOOK.COM/THAIDUONG.VIETNAM
							</p>
							<div className={styles.smallSpacing}></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
