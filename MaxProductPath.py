"""
Returns the maximum product of a path from the top-left corner
to the bottom-right corner of a grid, 
where you can only move down or right. 
If the maximum product is negative, it returns -1. 
The result is returned modulo 10^9 + 7 if it's non-negative.
"""

def maxProductPath(grid):
    # Define the modulo constant
    MOD = 10**9 + 7
    # Get the dimensions of the grid
    m, n = len(grid), len(grid[0])
    
    """
    ArithmeticError Initialize two DP tables: 
    one for maximum products and one for minimum products
    """
    max_dp = [[0]*n for _ in range(m)]
    min_dp = [[0]*n for _ in range(m)]
    
    #at the starting cell the product is just the value of that cell
    max_dp[0][0] = min_dp[0][0] = grid[0][0]
    
    # Fill the first column
    for i in range(1, m):
        max_dp[i][0] = min_dp[i][0] = max_dp[i-1][0] * grid[i][0]
    
    # Fill the first row
    for j in range(1, n):
        max_dp[0][j] = min_dp[0][j] = max_dp[0][j-1] * grid[0][j]
    
    # Fill the rest of the DP tables
    for i in range(1, m):
        for j in range(1, n):
            val = grid[i][j]
            
            # Calculate candidates for max and min products at (i, j)
            candidates = [
                max_dp[i-1][j] * val,
                min_dp[i-1][j] * val,
                max_dp[i][j-1] * val,
                min_dp[i][j-1] * val
            ]
            
            # Update the DP tables with the maximum and minimum products
            max_dp[i][j] = max(candidates)
            min_dp[i][j] = min(candidates)
    
    # The result is the maximum product at the bottom-right corner
    res = max_dp[m-1][n-1]
    # Return the result modulo MOD if it's non-negative, otherwise return -1
    return res % MOD if res >= 0 else -1


