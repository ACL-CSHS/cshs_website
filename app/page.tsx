import {Button, Card, CardContent, Container, Stack, Typography} from "@mui/material";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import Grid from '@mui/material/Grid2';
import {Barlow_Condensed} from "next/font/google";

const font = Barlow_Condensed({
    weight: "500",
    subsets: ["latin"],
});

export default function Home() {
  return (
      <Stack direction="column" alignItems="center" sx={{
          pt: 8,
          minHeight: '100vh',
          background: 'linear-gradient(135deg, rgba(255, 0, 200, 0.4) 0%, rgba(0, 0, 200, 0.4) 70%)', // Gradient with transparency
      }}>
          <Logo big />
          <Typography variant="h6" component="h1" textAlign="center" sx={{ mb: 4, mt: -4, }}>
              @ Academies of Loudoun
          </Typography>
          <Link href="/application">
              <Button variant="contained" size="large">
                  Apply Now
              </Button>
          </Link>
          <Stack direction="row" spacing={2} sx={{ mt: 1, }}>
              <Button color="inherit" size="small">
                  Learn more
              </Button>
              <Button color="inherit" size="small">
                  Events
              </Button>
          </Stack>
          <Container maxWidth="xl" sx={{ mt: 6, }}>
              <Grid container spacing={4} sx={{ width: '100%'}} columns={{ xs: 1, lg: 12 }}>
                  <Grid size={{ xs: 12, lg: 4 }}>
                      <Card sx={{ height: '100%', }}>
                          <CardContent>
                              <Typography {...font.style} gutterBottom variant="h4" sx={{ textDecoration: 'underline', textDecorationColor: 'deeppink', }}>150+ Membership</Typography>
                              <Typography>The largest Computer Science Honors Society in Loudoun County and one of the largest in Virginia.</Typography>
                          </CardContent>
                      </Card>
                  </Grid>
                  <Grid size={{ xs: 12, lg: 4, }}>
                      <Card sx={{ height: '100%', }}>
                          <CardContent>
                              <Typography {...font.style} gutterBottom variant="h4" sx={{ textDecoration: 'underline', textDecorationColor: 'deeppink', }}>District-Wide Outreach</Typography>
                              <Typography>Providing over 500 elementary, middle, and high school students with an exciting S.T.E.M experience throughout the school year.</Typography>
                          </CardContent>
                      </Card>
                  </Grid>
                  <Grid size={{ xs: 12, lg: 4, }}>
                      <Card sx={{ height: '100%', }}>
                          <CardContent>
                              <Typography {...font.style} gutterBottom variant="h4" sx={{ textDecoration: 'underline', textDecorationColor: 'deeppink', }}>Fantastic Community</Typography>
                                <Typography>Building a community of motivated students who are passionate about Computer Science and the future of Science, Technology, Engineering, and Mathematics.</Typography>
                          </CardContent>
                      </Card>
                  </Grid>
                  <Grid size={{ xs: 12, lg: 6, }}>
                      <Card sx={{ height: '100%', }}>
                          <CardContent>
                              <Typography {...font.style} gutterBottom variant="h6" sx={{ textDecoration: 'underline', textDecorationColor: 'deeppink', }}>Hour of Code</Typography>
                              <Typography>A night of endless opportunity and instruction providing elementary and middle school students with hands-on experience with Robotics and Computer Science.</Typography>
                          </CardContent>
                      </Card>
                  </Grid>
                  <Grid size={{ xs: 12, lg: 6, }}>
                      <Card sx={{ height: '100%', }}>
                          <CardContent>
                              <Typography {...font.style} gutterBottom variant="h6" sx={{ textDecoration: 'underline', textDecorationColor: 'deeppink', }}>Academies Hackathon</Typography>
                              <Typography>Two days of nonstop teamwork and participation for all elementary, middle, and high school students in all S.T.E.M. fields to earn ludicrous prizes in a diverse range of categories.</Typography>
                          </CardContent>
                      </Card>
                  </Grid>
              </Grid>
          </Container>
      </Stack>
  );
}
