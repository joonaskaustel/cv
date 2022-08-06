
import {AppShell, Avatar, createStyles, Grid, Group, Header, MantineProvider, Navbar, Text} from '@mantine/core'
import { IconPhoneCall, IconAt } from '@tabler/icons';
import {UserCardImage} from "./Components/Card";
import {EducationCard} from "./Components/EducationCard";
import {ExperienceCard} from "./Components/ExperienceCard";

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

function App() {
  const { classes } = useStyles();

  const data = {
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    "avatar": "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    "name": "Bill Headbanger",
    "job": "Fullstack engineer",
    "stats": [
      {
        "value": "34K",
        "label": "Followers"
      },
      {
        "value": "187",
        "label": "Follows"
      },
      {
        "value": "1.6K",
        "label": "Posts"
      }
    ]
  }

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>

      <AppShell
        padding="md"
        header={<Header height={60} p="xs">{/* Header content */}</Header>}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
          <UserCardImage image={data.image} name={data.name} avatar={data.avatar} job={data.job} stats={data.stats}/>

        <ExperienceCard/>
        <EducationCard/>

      </AppShell>
    </MantineProvider>
  )
}

export default App
