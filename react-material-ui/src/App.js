import {
	AppBar,
	Avatar,
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core";
// import './App.css';

import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: "#fff",
	},
	hero: {
		backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
		height: "500px",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		fontSize: "4rem",
		[theme.breakpoints.down("sm")]: {
			//parecido com media screen, quando chega no SmallScreen
			height: "300px",
			fontSize: "3em",
		},
	},
	blogsContainer: {
		paddingTop: theme.spacing(3),
	},
	blogTitle: {
		fontWeight: 800,
		paddingBottom: theme.spacing(3),
	},
	card: {
		maxWidth: "100%",
	},
	media: {
		height: "240px",
	},
	cardActions: {
		display: "flex",
		margin: "0 10px",
		justifyContent: "space-between",
	},
	author: {
		display: "flex",
	},
	paginationContainer: {
		display: "flex",
		justifyContent: "center",
	},
}));

function App() {
	const classes = useStyles();

	return (
		<div className="App">
			<AppBar className={classes.appBar} position="static">
				<Toolbar>
					<Typography variant="h6" color="primary">
						Blog
					</Typography>
				</Toolbar>
			</AppBar>

			<Box className={classes.hero}>
				<Box>React Blog</Box>
			</Box>

			<Container maxWidth="lg" className={classes.blogsContainer}>
				<Typography variant="h4" className={classes.blogTitle}>
					Articles
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4}>
						<Card className="classes.card">
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="140"
									image="https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										React useContext
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>

							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src="https://scontent.fccm7-1.fna.fbcdn.net/v/t1.0-9/68738154_2212657132196014_1524558947351003136_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=QrMTUSam_XcAX_lw_eq&_nc_ht=scontent.fccm7-1.fna&oh=6ec2de61b41aa16ca1b05e9e04e74eb9&oe=5FD20576"></Avatar>
									<Box ml={2}>
										<Typography variant="subtitle2" component="p">
											Jao Jhones
										</Typography>
										<Typography
											variant="subtitle2"
											component="p"
											color="textSecondary"
										>
											Maio 14, 2020
										</Typography>
									</Box>
								</Box>

								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Card className="classes.card">
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="140"
									image="https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										React useContext
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>

							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src="https://scontent.fccm7-1.fna.fbcdn.net/v/t1.0-9/68738154_2212657132196014_1524558947351003136_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=QrMTUSam_XcAX_lw_eq&_nc_ht=scontent.fccm7-1.fna&oh=6ec2de61b41aa16ca1b05e9e04e74eb9&oe=5FD20576"></Avatar>
									<Box ml={2}>
										<Typography variant="subtitle2" component="p">
											Jao Jhones
										</Typography>
										<Typography
											variant="subtitle2"
											component="p"
											color="textSecondary"
										>
											Maio 14, 2020
										</Typography>
									</Box>
								</Box>

								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Card className="classes.card">
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="140"
									image="https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										React useContext
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>

							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src="https://scontent.fccm7-1.fna.fbcdn.net/v/t1.0-9/68738154_2212657132196014_1524558947351003136_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=QrMTUSam_XcAX_lw_eq&_nc_ht=scontent.fccm7-1.fna&oh=6ec2de61b41aa16ca1b05e9e04e74eb9&oe=5FD20576"></Avatar>
									<Box ml={2}>
										<Typography variant="subtitle2" component="p">
											Jao Jhones
										</Typography>
										<Typography
											variant="subtitle2"
											component="p"
											color="textSecondary"
										>
											Maio 14, 2020
										</Typography>
									</Box>
								</Box>

								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Card className="classes.card">
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="140"
									image="https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										React useContext
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>

							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src="https://scontent.fccm7-1.fna.fbcdn.net/v/t1.0-9/68738154_2212657132196014_1524558947351003136_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=QrMTUSam_XcAX_lw_eq&_nc_ht=scontent.fccm7-1.fna&oh=6ec2de61b41aa16ca1b05e9e04e74eb9&oe=5FD20576"></Avatar>
									<Box ml={2}>
										<Typography variant="subtitle2" component="p">
											Jao Jhones
										</Typography>
										<Typography
											variant="subtitle2"
											component="p"
											color="textSecondary"
										>
											Maio 14, 2020
										</Typography>
									</Box>
								</Box>

								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>

					{/* <Grid item xs={12} sm={6} md={4}></Grid>

					<Grid item xs={12} sm={6} md={4}></Grid>

					<Grid item xs={12} sm={6} md={4}></Grid> */}
				</Grid>

				<Grid>
					<Box my={4} className={classes.paginationContainer}>
						<Pagination count={10} />
					</Box>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
