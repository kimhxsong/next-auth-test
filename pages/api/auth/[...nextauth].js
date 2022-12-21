import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FortyTwoProvider from "next-auth/providers/42-school"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
	FortyTwoProvider({
		clientId: process.env.FORTY_TWO_CLIENT_ID,
		clientSecret: process.env.FORTY_TWO_CLIENT_SECRET,
	  })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)